const Skeleton = ({
  height = "16px",
  width = "100%",
  maxWidth = "1000px",
  className,
}) => {
  return (
    <div
      className={` rounded bg-gray-200 animate-pulse ${className}`}
      style={{ height, width, maxWidth }}
    />
  );
};

export default Skeleton;
