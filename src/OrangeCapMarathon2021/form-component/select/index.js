import React from "react";
import * as S from "./select.styled";

const Select = React.forwardRef(({ label, options, ...rest }, ref) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Select ref={ref} {...rest}>
        {options?.map((o, i) => (
          <option key={i} value={o.value}>
            {o.text}
          </option>
        ))}
      </S.Select>
    </S.Container>
  );
});

export default Select;
