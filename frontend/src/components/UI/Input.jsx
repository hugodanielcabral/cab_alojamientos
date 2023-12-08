import React from "react";

export const Input = (props) => {
  return (
    <input
      type="text"
      className="block w-full p-2 my-2 text-black bg-slate-500-800"
      {...props}
    />
  );
};
