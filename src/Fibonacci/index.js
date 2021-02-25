import React, { useState } from "react";

export default function Fibonacci() {
  const [num, setNum] = useState(1);
  const fib = (num) => {
    num = num || 1;
    if (num < 2) {
      return num;
    } else {
      return fib(num - 1) + fib(num - 2);
    }
  };
  return (
    <div>
      <div>
        fibonancci of {num} is {fib(num)}
      </div>
      <input type="text" onChange={(e) => setNum(e.target.value)} />
    </div>
  );
}
