import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../updateAction";
import {
  Input,
  Select,
  Datepicker,
  ImageUploader,
  Button,
} from "../../form-component";
import { FormWrapper } from "../../main.styled";

const Part1 = ({ history }) => {
  const { actions, state } = useStateMachine({ updateAction });

  const {
    address,
    nameTH,
    surnameTH,
    nameEN,
    surnameEN,
    birthDate,
    email,
    idCard,
    telephone,
    picture,
    bib,
  } = state;
  const { register, control, watch, handleSubmit } = useForm({
    defaultValues: {
      address,
      nameTH,
      surnameTH,
      nameEN,
      surnameEN,
      birthDate: new Date(birthDate),
      email,
      idCard,
      telephone,
      picture,
      bib,
    },
  });

  const isGreater18 = (date) => {
    var ageDifMs = Date.now() - date.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const saveDraft = () => {
    console.log(watch());
    alert("saveDraft");
  };

  const onSubmit = (data) => {
    actions.updateAction(data);
    history.push(`/orangeCapMarathon2021/step2`);
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <h2>ข้อมูลส่วนตัว</h2>
      <Select
        name="address"
        label="คำนำหน้าชื่อ"
        options={[
          {
            text: "นาย",
            value: "นาย",
          },
          {
            text: "นาง",
            value: "นาง",
          },
          {
            text: "นางสาว",
            value: "นางสาว",
          },
        ]}
        ref={register({ required: true })}
      />
      <Input
        type="text"
        label="ชื่อภาษาไทย"
        name="nameTH"
        ref={register({ required: true })}
      />
      <Input
        type="text"
        label="นามสกุลภาษาไทย"
        name="surnameTH"
        ref={register({ required: true })}
      />
      <Input
        type="text"
        label="ชื่อภาษาอังกฤษ"
        name="nameEN"
        ref={register({ required: true })}
      />
      <Input
        type="text"
        label="นามสกุลภาษาอังกฤษ"
        name="surnameEN"
        ref={register({ required: true })}
      />

      <Controller
        control={control}
        name="birthDate"
        rules={{
          required: true,
          validate: {
            isGreater18,
          },
        }}
        render={({ onChange, onBlur, value }) => (
          <Datepicker
            label="วันเดือนปีเกิด"
            maxDate={new Date(new Date().getFullYear() - 18, 0, 1)}
            onChange={onChange}
            onBlur={onBlur}
            selected={value}
          />
        )}
      />
      <Input
        type="email"
        label="อีเมล"
        name="email"
        ref={register({ required: true })}
      />
      <Input
        type="text"
        label="เลขบัตรประจำตัวประชาชน"
        name="idCard"
        ref={register({ required: true })}
      />
      <Input
        type="text"
        label="เบอร์โทรศัพท์"
        name="telephone"
        ref={register({ required: true })}
      />

      <Controller
        control={control}
        name="picture"
        render={({ name, onChange }) => {
          return (
            <ImageUploader
              name={name}
              label="รูปถ่ายหน้าตรง"
              //add web api to store image here
              onChange={onChange}
            />
          );
        }}
      />

      <Input
        type="text"
        label="ชื่อบนเบอร์วิ่ง (BIB)"
        name="bib"
        ref={register({ required: true })}
      />

      <Button
        type="button"
        label="Save Draft"
        onClick={() => {
          saveDraft();
        }}
      />

      <Button type="submit" label="Next" />
    </FormWrapper>
  );
};

export default Part1;
