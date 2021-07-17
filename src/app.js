import appStyles from "./app.module.scss";
import { ChatButton } from "./components/chatButton/chatButton";
import { ChartPortal } from "./pages/chartPortal/chatPortal";

export let App = () => {
  return (
    <div className={appStyles.chatContainer}>
      <div className={appStyles.chatPosition}>
        {/* chat interface */}
        <ChartPortal />
        {/* button to propagate */}
        {/* <ChatButton /> */}
      </div>
    </div>
  );
};
