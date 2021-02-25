import React from "react";

export default function ShiftToLast() {
  const func = (arr, dir, num) => {
    if (dir === "right") {
      const sliceArr = arr.slice(arr.length - num, arr.length);

      const remainArr = arr.slice(0, num - 1);

      return [...sliceArr, ...remainArr];
    }
    const sliceArr = arr.slice(0, num);
    const remainArr = arr.slice(num, arr.length);
    return [...remainArr, ...sliceArr];
  };
  console.log(func([1, 2, 3, 4, 5], "right", 3));
  return <div></div>;
}
