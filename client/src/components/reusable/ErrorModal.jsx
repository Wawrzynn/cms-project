const ErrorModal = ({ index, error }) => {
  return (
    <div className="bg-red-600" key={index}>
      <h1>{error}</h1>
    </div>
  );
};

export default ErrorModal;
