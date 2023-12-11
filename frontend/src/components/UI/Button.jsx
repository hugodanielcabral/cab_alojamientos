export const Button = (props) => {
  return (
    <button className="btn btn-primary" {...props}>
      {props.children}
    </button>
  );
};
