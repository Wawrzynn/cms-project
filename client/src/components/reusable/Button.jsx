const Button = ({ children, ...props }) => {
  return (
    <button
      className="px-5 py-3 bg-blue-500 rounded hover:bg-blue-200"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
