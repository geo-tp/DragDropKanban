export const CustomButton = (icon, text) => {
  return (
    <button className="custom-button">
      {icon && <i className={`fa fa-${icon}`}></i>}
      {text}
    </button>
  );
};
