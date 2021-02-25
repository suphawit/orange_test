import React from "react";

export default function FizzBuzz() {
  const func = (num) => {
    const fizz = num % 3 ? "" : "Fizz";
    const buzz = num % 5 ? "" : "Buzz";
    return `${fizz}${buzz}`;
  };
  console.log(func(21));
  console.log(func(25));

  console.log(func(45));
  return <></>;
}
