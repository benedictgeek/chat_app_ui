import buttonStyle from "./chatButton.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

export let ChatButton = () => {
  return (
    <div className={buttonStyle.buttonPart}>
      <div className={buttonStyle.buttonContainer}>
        <FontAwesomeIcon icon={faComment} color={"white"} size="2x" />
      </div>
      <span className={buttonStyle.unreadMessage}>2</span>
    </div>
  );
};
