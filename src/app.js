import appStyles from "./app.module.scss";
import { ChatButton } from "./components/chatButton/chatButton";
import { ChartPortal } from "./pages/chartPortal/chatPortal";
import { useChatContext } from "./state/contextProviders/chatContext/chatContext";
import { SlideInComponent } from "./utils/componentFade";

export let App = () => {
  let { state } = useChatContext();
  return (
    <div className={appStyles.chatContainer}>
      <div className={appStyles.chatPosition}>
        {/* chat interface */}
        <SlideInComponent show={state.portalSwitch == true}>
          <ChartPortal />
        </SlideInComponent>
        {/* button to propagate */}
        <SlideInComponent show={state.portalSwitch == false}>
          <ChatButton />
        </SlideInComponent>
      </div>
    </div>
  );
};
