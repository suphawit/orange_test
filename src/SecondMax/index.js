import React from "react";

export default function SecondMax() {
  const func = (arr) => {
    const set = [...new Set(arr)];
    set.sort((a, b) => b - a);
    return set[1];
  };
  console.log(func([2, 3, 4, 4, 5, 5, 5, 6, 7, 8]));
  return <></>;
}
