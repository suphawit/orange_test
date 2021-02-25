import React from "react";
import * as S from "./input.styled";

const Input = React.forwardRef(({ label, ...rest }, ref) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input ref={ref} {...rest} />
    </S.Container>
  );
});

export default Input;
