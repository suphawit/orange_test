import React from "react";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../updateAction";
import { Input, Button } from "../../form-component";
import { FormWrapper } from "../../main.styled";
import * as S from "./formSectionPart3.styled";

export default function Part3({ history }) {
  const { actions, state } = useStateMachine({ updateAction });

  const {
    emergencyPersonName1,
    emergencyPersonSurname1,
    emergencyPersonRelation1,
    emergencyPersonTelephone1,
    emergencyPersonName2,
    emergencyPersonSurname2,
    emergencyPersonRelation2,
    emergencyPersonTelephone2,
  } = state;
  const { register, handleSubmit } = useForm({
    defaultValues: {
      emergencyPersonName1,
      emergencyPersonSurname1,
      emergencyPersonRelation1,
      emergencyPersonTelephone1,
      emergencyPersonName2,
      emergencyPersonSurname2,
      emergencyPersonRelation2,
      emergencyPersonTelephone2,
    },
  });

  const saveDraft = () => {
    // console.log(watch());
    alert("saveDraft");
  };
  const onSubmit = (data) => {
    actions.updateAction(data);
    history.push(`/orangeCapMarathon2021/step4`);
  };

  const goBack = () => {
    history.push(`/orangeCapMarathon2021/step2`);
  };
  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <h2>ผู้ติดต่อฉุกเฉิน</h2>
      <S.EmergencyPerson>
        <S.EmergencyPersonHeader>
          ผู้ติดต่อฉุกเฉินคนที่ 1
        </S.EmergencyPersonHeader>
        <Input
          type="text"
          label="ชื่อ"
          name="emergencyPersonName1"
          ref={register({ required: true })}
        />
        <Input
          type="text"
          label="นามสกุล"
          name="emergencyPersonSurname1"
          ref={register({ required: true })}
        />
        <Input
          type="text"
          label="ความสัมพันธ์"
          name="emergencyPersonRelation1"
          ref={register({ required: true })}
        />
        <Input
          type="text"
          label="เบอร์โทรศัพท์"
          name="emergencyPersonTelephone1"
          ref={register({ required: true })}
        />
      </S.EmergencyPerson>
      <S.EmergencyPerson>
        <S.EmergencyPersonHeader>
          ผู้ติดต่อฉุกเฉินคนที่ 2
        </S.EmergencyPersonHeader>
        <Input
          type="text"
          label="ชื่อ"
          name="emergencyPersonName2"
          ref={register({ required: true })}
        />
        <Input
          type="text"
          label="นามสกุล"
          name="emergencyPersonSurname2"
          ref={register({ required: true })}
        />
        <Input
          type="text"
          label="ความสัมพันธ์"
          name="emergencyPersonRelation2"
          ref={register({ required: true })}
        />
        <Input
          type="text"
          label="เบอร์โทรศัพท์"
          name="emergencyPersonTelephone2"
          ref={register({ required: true })}
        />
      </S.EmergencyPerson>
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
