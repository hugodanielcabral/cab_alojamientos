export const Button = ({ children }, props) => {
  return (
    <button
      className="py-2 px-4 bg-green-400 text-black rounded hover:bg-green-500 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
      {...props}
    >
      {children}
    </button>
  );
};
