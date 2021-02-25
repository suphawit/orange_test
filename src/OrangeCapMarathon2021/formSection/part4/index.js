import React from "react";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../updateAction";
import { Input, Select, Button } from "../../form-component";
import { FormWrapper } from "../../main.styled";

export default function Part4({ history }) {
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
    history.push(`/orangeCapMarathon2021/step5`);
  };

  const goBack = () => {
    history.push(`/orangeCapMarathon2021/step3`);
  };
  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <h2>ข้อมูลทางการแพทย์</h2>
      <Select
        name="groupBlood"
        label="หมู่เลือด"
        options={[
          {
            text: "A",
            value: "A",
          },
          {
            text: "B",
            value: "B",
          },
          {
            text: "O",
            value: "O",
          },
          {
            text: "AB",
            value: "AB",
          },
        ]}
        ref={register({ required: true })}
      />
      <Select
        name="haveAllergicMedicine"
        label="ท่านมีอาการแพ้ยาหรือสารต่างๆ หรือไม่"
        options={[
          {
            text: "ไม่",
            value: "no",
          },
          {
            text: "ใช่",
            value: "yes",
          },
        ]}
        ref={register({ required: true })}
      />

      <Input
        type="text"
        label="ระบุ"
        name="allergicMedicineDetails"
        ref={register({ required: true })}
      />
      <Select
        name="haveCongenitalDisease"
        label="ท่านมีโรคประจำตัว หรือไม่"
        options={[
          {
            text: "ไม่",
            value: "no",
          },
          {
            text: "ใช่",
            value: "yes",
          },
        ]}
        ref={register({ required: true })}
      />
      <Input
        type="text"
        label="ระบุ"
        name="congenitalDiseaseDetails"
        ref={register({ required: true })}
      />
      <Select
        name="haveOperation"
        label="ท่านมีประวัติการผ่าตัด มาก่อนหรือไม่"
        options={[
          {
            text: "ไม่",
            value: "no",
          },
          {
            text: "ใช่",
            value: "yes",
          },
        ]}
        ref={register({ required: true })}
      />
      <Input
        type="text"
        label="สถานที่ที่ผ่าตัด"
        name="haveOperationWhere"
        ref={register({ required: true })}
      />
      <Input
        type="text"
        label="ปีที่ผ่าตัด"
        name="haveOperationYear"
        ref={register({ required: true })}
      />
      <Select
        name="havePrenancyPlan"
        label="ท่านมีแพลนที่จะมีบุตร หรือ กำลังตั้งครรภ์ก่อนถึงช่วงการแข่งขันหรือไม่"
        options={[
          {
            text: "ไม่",
            value: "no",
          },
          {
            text: "ใช่",
            value: "yes",
          },
        ]}
        ref={register({ required: true })}
      />
      <Select
        name="haveCongenitalMedicine"
        label="ท่านมียาที่ต้องทานเป็นประจำหรือไม่"
        options={[
          {
            text: "ไม่",
            value: "no",
          },
          {
            text: "ใช่",
            value: "yes",
          },
        ]}
        ref={register({ required: true })}
      />
      <Input
        type="text"
        label="ยาที่ใช้"
        name="haveCongenitalMedicineDetails"
        ref={register({ required: true })}
      />
      <Select
        name="haveInjuredFromRace"
        label="ท่านเคยบาดเจ็บ/ เจ็บป่วย จากการเข้าร่วมงานวิ่ง ที่ต้องไปรักษาต่อที่โรงพยาบาลหรือไม่"
        options={[
          {
            text: "ไม่",
            value: "no",
          },
          {
            text: "ใช่",
            value: "yes",
          },
        ]}
        ref={register({ required: true })}
      />
      <Select
        name="haveExcrcise"
        label="ท่านออกกำลังกายสม่ำเสมอหรือไม่ (อย่างน้อย 1-2 ครั้ง ต่อสัปดาห์)"
        options={[
          {
            text: "ไม่",
            value: "no",
          },
          {
            text: "ใช่",
            value: "yes",
          },
        ]}
        ref={register({ required: true })}
      />
      <Select
        name="haveHeartAttack"
        label="ท่านเคยมีอาการเจ็บแน่นหน้าอก ใจสั่น เหนื่อยง่ายผิดปกติ หน้ามืด ขณะออกกำลังกายหรือไม่?"
        options={[
          {
            text: "ไม่",
            value: "no",
          },
          {
            text: "ใช่",
            value: "yes",
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
      <Button type="submit" label="Next" />
    </FormWrapper>
  );
}
