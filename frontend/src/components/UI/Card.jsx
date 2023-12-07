import React from "react";

export const Card = ({ children }) => {
  console.log(children);
  return <div className="bg-zinc-800 p-14 rounded-md">{children}</div>;
};
