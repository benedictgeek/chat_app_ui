import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

export let ChatPageHeaderWrapper = ({ ...props }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "50px",
        backgroundColor: "#203044",
        color: "white",
        padding: "0 10px",
      }}
    >
      <div
        style={{
          marginRight: "15px",
        }}
      >
        <FontAwesomeIcon icon={faLongArrowAltLeft} />
      </div>
      {props.children}
    </div>
  );
};
