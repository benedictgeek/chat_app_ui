import appStyles from "./app.module.scss";
import { ChatButton } from "./components/chatButton/chatButton";

export let App = () => {
  return (
    <div className={appStyles.chatContainer}>
      <div className={appStyles.chatPosition}>
        {/* chat interface */}
        {/* button to propagate */}
        <ChatButton />
      </div>
    </div>
  );
};
