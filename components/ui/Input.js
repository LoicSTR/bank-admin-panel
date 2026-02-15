const Input = ({ type, name, defaultValue, placeholder, className }) => {
  return (
    <input
      type={type}
      className={`bg-gray-100 text-gray-950 px-4 py-1 rounded-2xl ${className}`}
      placeholder={placeholder}
      name={name}
      defaultValue={defaultValue}
    />
  );
};
export default Input;
