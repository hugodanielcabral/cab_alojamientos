export const Input = (props) => {
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
        <input
          type="text"
          className="w-full max-w-xs input input-bordered border-white bg-[#212d30] shadow-lg shadow-black"
          {...props}
        />
      ) : (
        <input
          type="text"
          className="w-full max-w-xs input input-bordered input-error"
          {...props}
        />
      )}

      {findError() && <p className="text-red-500">{findError()}</p>}
    </>
  );
};
