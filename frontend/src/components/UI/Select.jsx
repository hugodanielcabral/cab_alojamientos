export const Select = (props) => {
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
        <select
          className="w-full max-w-xs select select-bordered border-white bg-[#212d30] shadow-lg shadow-black"
          {...props}
        >
          {props.children}
        </select>
      ) : (
        <select
          className="w-full max-w-xs select select-bordered select-error bg-[#212d30] shadow-lg shadow-black"
          {...props}
        >
          {props.children}
        </select>
      )}
      {findError() && <p className="text-red-500">{findError()}</p>}
    </>
  );
};
