const Select = ({ name, id, children, className }) => {
  return (
    <select
      name={name}
      id={id}
      className={`bg-gray-100 text-gray-950 px-4 py-1 rounded-2xl ${className}`}
    >
      {children}
    </select>
  );
};
export default Select;
