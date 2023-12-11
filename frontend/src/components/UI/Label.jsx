export const Label = (props) => {
  return (
    <label className="w-full max-w-xs form-control" {...props}>
      {props.children}
    </label>
  );
};
