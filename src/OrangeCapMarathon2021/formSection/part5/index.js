import React from "react";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../updateAction";
import { Select, Button } from "../../form-component";
import { FormWrapper } from "../../main.styled";

export default function Part5({ history }) {
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
    history.push(`/orangeCapMarathon2021/result`);
  };

  const goBack = () => {
    history.push(`/orangeCapMarathon2021/step4`);
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <h2>เสื้อของที่ระลึก</h2>
      <Select
        name="shirtSize"
        label="ไซส์เสื้อ"
        options={[
          {
            text: "XS",
            value: "XS",
          },
          {
            text: "S",
            value: "S",
          },
          {
            text: "M",
            value: "M",
          },
          {
            text: "L",
            value: "L",
          },
          {
            text: "XL",
            value: "XL",
          },
          {
            text: "XXL",
            value: "XXL",
          },
          {
            text: "XXXL",
            value: "XXXL",
          },
        ]}
        ref={register({ required: true })}
      />
      <Button
        type="button"
        label="Save Draft"
        onClick={() => {
          saveDraft();
        }}
      />
      <Button type="button" onClick={goBack} label="back" type="button" />
      <Button type="submit" label="Submit" />
    </FormWrapper>
  );
}
