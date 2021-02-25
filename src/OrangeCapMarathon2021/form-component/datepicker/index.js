import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import {
  DatePickerWrapper,
  DatePickerButton,
  IconWrapper,
  CalendarIcon,
  Label,
} from "./datepicker.styled";

const Datepicker = ({ label, id, type, onChange, ...rest }) => {
  const [startDate, setStartDate] = useState(new Date());
  const ref = React.createRef();

  const handleChange = (date) => {
    setStartDate(date);
    onChange(date);
  };

  const ExampleCustomInput = forwardRef(({ value, onClick, rest }, ref) => (
    <DatePickerButton id={id} type={type} onClick={onClick} ref={ref} {...rest}>
      {value}
      <IconWrapper>
        <CalendarIcon icon="calendar" />
      </IconWrapper>
    </DatePickerButton>
  ));
  return (
    <DatePickerWrapper>
      <Label>{label}</Label>
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        dateFormat="dd/MM/yyyy"
        customInput={<ExampleCustomInput ref={ref} />}
        {...rest}
      />
    </DatePickerWrapper>
  );
};

export default Datepicker;
