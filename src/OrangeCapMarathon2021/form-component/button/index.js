import React from "react";
import * as S from "./button.styled";

const Button = ({ label, ...rest }) => {
  return <S.Button {...rest}>{label}</S.Button>;
};

export default Button;
