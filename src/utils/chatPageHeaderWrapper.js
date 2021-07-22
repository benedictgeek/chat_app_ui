import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { chatPages } from "../pages/chartPortal/chatPortal";
import { useChatContext } from "../state/contextProviders/chatContext/chatContext";

export let ChatPageHeaderWrapper = ({
  pageRoute = chatPages.MAINPAGE,
  ...props
}) => {
  let { setPageDispatch } = useChatContext();
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
          cursor: "pointer",
          padding: "5px"
        }}
        onClick={() => setPageDispatch(pageRoute)}
      >
        <FontAwesomeIcon icon={faLongArrowAltLeft} />
      </div>
      {props.children}
    </div>
  );
};
