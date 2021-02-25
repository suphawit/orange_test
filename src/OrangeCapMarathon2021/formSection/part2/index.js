import React from "react";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../updateAction";
import _ from "lodash";
import { Select, Button } from "../../form-component";
import { FormWrapper } from "../../main.styled";
import * as S from "./formSectionPart2.styled";

export default function Part2({ history }) {
  const { actions, state } = useStateMachine({ updateAction });

  const {
    haveRacedMarathon,
    expectedRaceTimeHours,
    expectedRaceTimeMinutes,
  } = state;
  const { register, handleSubmit } = useForm({
    defaultValues: {
      haveRacedMarathon,
      expectedRaceTimeHours,
      expectedRaceTimeMinutes,
    },
  });
  const expectRactTimeHoursList = [];
  _.range(6).forEach((current, index) => {
    expectRactTimeHoursList.push({
      text: index,
      value: index,
    });
  });
  const expectRactTimeMinutesList = [];
  _.range(60).forEach((current, index) => {
    expectRactTimeMinutesList.push({
      text: index,
      value: index,
    });
  });

  const onSubmit = (data) => {
    actions.updateAction(data);
    history.push(`/orangeCapMarathon2021/step3`);
  };

  const saveDraft = () => {
    // console.log(watch());
    alert("saveDraft");
  };

  const goBack = () => {
    history.push(`/orangeCapMarathon2021`);
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <h2>ข้อมูลเกี่ยวกับการวิ่ง</h2>
      <Select
        name="haveRacedMarathon"
        label="เคยลงงานแข่ง Mini Marathon / Half Marathon / Full Marathon มาก่อนหรือไม่"
        options={[
          {
            text: "ใช่",
            value: "yes",
          },
          {
            text: "ไม่",
            value: "no",
          },
        ]}
        ref={register({ required: true })}
      />
      <p>เวลาที่คาดว่าจะจบในการวิ่งครั้งนี้</p>
      <S.ExpectedRaceTimeWrapper>
        <Select
          name="expectedRaceTimeHours"
          label="ชั่วโมง"
          options={expectRactTimeHoursList}
          ref={register({ required: true })}
        />
        <Select
          name="expectedRaceTimeMinutes"
          label="นาที"
          options={expectRactTimeMinutesList}
          ref={register({ required: true })}
        />
      </S.ExpectedRaceTimeWrapper>

      <Button
        type="button"
        label="Save Draft"
        onClick={() => {
          saveDraft();
        }}
      />

      <Button type="button" onClick={goBack} label="back" type="button" />

      <Button type="submit" label="Next" />
    </FormWrapper>
  );
}
