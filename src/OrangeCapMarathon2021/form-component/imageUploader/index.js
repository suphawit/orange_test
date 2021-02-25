import React, { useState } from "react";
import * as S from "./imageUploader.styled";

const ImageUploader = React.forwardRef(({ onChange, label, ...rest }, ref) => {
  const [pictures, setPictures] = useState([]);

  const onDrop = (picture) => {
    setPictures([...pictures, picture]);
    onChange(picture);
  };
  return (
    <S.Container>
      <S.ImageUploaderField
        label={label}
        withPreview={true}
        singleImage={true}
        withIcon={true}
        onChange={onDrop}
        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880}
        ref={ref}
        {...rest}
      />
    </S.Container>
  );
});

export default ImageUploader;
