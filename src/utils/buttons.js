import "./buttons.scss";

export let Button = ({ endIcon, ...props }) => {
  return (
    <div
      className="button-container"
      style={{
        backgroundColor: props.transparent
          ? "transparent"
          : props.backgroundColor && props.backgroundColor,
        color: props.color && props.color,
      }}
      {...props}
    >
      <>
        <span className="btnTitle">{props.title}</span> {endIcon}
      </>
    </div>
  );
};
