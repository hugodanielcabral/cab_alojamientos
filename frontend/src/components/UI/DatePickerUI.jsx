import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const DatePickerUI = (props) => {
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
        <DatePicker
          className="w-full max-w-xs input input-bordered bg-[#212d30] shadow-lg shadow-black border-white"
          {...props}
        />
      ) : (
        <DatePicker
          className="w-full max-w-xs input input-bordered input-error bg-[#212d30] shadow-lg shadow-black"
          {...props}
        />
      )}
      {findError() && <p className="text-red-500">{findError()}</p>}
    </>
  );
};
