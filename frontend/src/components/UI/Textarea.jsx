import React from "react";

export const Textarea = (props) => {
  const findError = () => {
    if (props.errors) {
      const error = props.errors.find((err) => err.path === props.name);
      if (error) {
        return error.msg;
      }
    }
  };
  return (
    <>
      {!findError() ? (
        <textarea
          className="w-full max-w-xs textarea textarea-bordered border-white bg-[#212d30] shadow-lg shadow-black"
          rows={4}
          {...props}
        />
      ) : (
        <textarea
          className="w-full max-w-xs textarea textarea-bordered textarea-error bg-[#212d30] shadow-lg shadow-black"
          rows={4}
          {...props}
        />
      )}

      {findError() && <p className="text-red-500">{findError()}</p>}
    </>
  );
};
