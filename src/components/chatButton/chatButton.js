import buttonStyle from "./chatButton.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { useChatContext } from "../../state/contextProviders/chatContext/chatContext";

export let ChatButton = () => {
  let { setPortalDispatch } = useChatContext();
  return (
    <div
      className={buttonStyle.buttonPart}
      onClick={() => setPortalDispatch(true)}
    >
      <div className={buttonStyle.buttonContainer}>
        <FontAwesomeIcon icon={faComment} color={"white"} size="2x" />
      </div>
      <span className={buttonStyle.unreadMessage}>2</span>
    </div>
  );
};
