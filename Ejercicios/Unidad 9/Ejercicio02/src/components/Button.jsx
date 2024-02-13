const Button = ({ id, children, onClick }) => {
  return (
    <button id={id} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
