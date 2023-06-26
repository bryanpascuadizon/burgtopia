import React from "react";

interface CounterProps {
    counter: number,
    handleCounter: (type:string) => void
}

const Counter = ({counter, handleCounter} : CounterProps) => {

  return (
    <div className="product_increment flex-grow grid grid-cols-3 max-w-10 p-1 bg-grey-300 rounded-lg">
      <button
        onClick={() => handleCounter("")}
        className="text-center font-bold"
      >
        -
      </button>
      <div className="text-center self-center">{counter}</div>
      <button
        onClick={() => handleCounter("add")}
        className="text-center text-orange-500 font-bold"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
