export const Button = (props) => {
  console.log(props);
  return (
    <button
      className="px-4 py-2 font-medium text-black bg-green-400 rounded hover:bg-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
      {...props}
    >
      {props.children}
    </button>
  );
};
