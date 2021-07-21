import { ChartPage } from "../chatPage/chartPage";
import { MainPage } from "../mainPage/mainPage";
import { MemberProfile } from "../memberProfile/memberProfile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import chartPortalStyles from "./chatPortal.module.scss";
import { useChatContext } from "../../state/contextProviders/chatContext/chatContext";
import { SlideInComponent } from "../../utils/componentFade";

export let ChartPortal = () => {
  let { state, setPortalDispatch } = useChatContext();
  let currentPage = state.currentPage;
  return (
    <div className={chartPortalStyles.chatPortalFrameContainer}>
      <div className={chartPortalStyles.chatPortalFrame}>
        <SlideInComponent show={currentPage == chatPages.MAINPAGE}>
          <MainPage />
        </SlideInComponent>
        <SlideInComponent show={currentPage == chatPages.PROFILEPAGE}>
          <MemberProfile />
        </SlideInComponent>
        <SlideInComponent show={currentPage == chatPages.CHATPAGE}>
          <ChartPage />
        </SlideInComponent>
      </div>

      <div
        className={chartPortalStyles.closePortal}
        onClick={() => setPortalDispatch(false)}
      >
        <FontAwesomeIcon icon={faTimes} />
      </div>
    </div>
  );
};

export const chatPages = {
  MAINPAGE: "main",
  PROFILEPAGE: "profile",
  CHATPAGE: "chatPage",
};
