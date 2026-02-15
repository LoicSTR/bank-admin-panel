const Button = ({ type, children }) => {
  return (
    <button
      type={type}
      className="cursor-pointer bg-teal-700 text-white rounded-2xl px-4 py-1 hover:bg-teal-600 transition-all duration-300"
    >
      {children}
    </button>
  );
};
export default Button;
