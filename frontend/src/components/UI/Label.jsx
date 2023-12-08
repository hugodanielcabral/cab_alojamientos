import React from "react";

export const Label = (props) => {
  return (
    <label className="block text-teal-400" {...props}>
      {props.children}
    </label>
  );
};
