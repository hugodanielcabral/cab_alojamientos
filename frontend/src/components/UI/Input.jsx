import React from "react";

export const Input = (props) => {
  return (
    <input
      type="text"
      className="bg-slate-500-800 p-2 block my-2 w-full text-black"
      {...props}
    />
  );
};
