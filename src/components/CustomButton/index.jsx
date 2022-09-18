export const CustomButton = ({ icon, text }) => {
  return (
    <button
      className={
        text ? "custom-button" : "custom-button custom-button--icon-only"
      }
    >
      {icon && <i className={`fa fa-${icon}`}></i>}
      {text}
    </button>
  );
};
