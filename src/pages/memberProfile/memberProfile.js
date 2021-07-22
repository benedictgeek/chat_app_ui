import syles from "./memberProfile.module.scss";
import { ChatPageHeaderWrapper } from "../../utils/chatPageHeaderWrapper";
import Avartar from "../../utils/avartar";
import { Button } from "../../utils/buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { chatPages } from "../chartPortal/chatPortal";
import { useChatContext } from "../../state/contextProviders/chatContext/chatContext";

export let MemberProfile = () => {
  let { setPageDispatch } = useChatContext();
  return (
    <div className={syles.container}>
      <ChatPageHeaderWrapper pageRoute={chatPages.MAINPAGE}>
        <div className={syles.pageTitle}>Profile</div>
      </ChatPageHeaderWrapper>

      <div className={syles.profileContent}>
        <Avartar size="120px" />
        <div className={syles.name}>Olushola Ben</div>
        <div className={syles.email}>me@me.com</div>
        <div className={syles.profiles}>President . Developer</div>
        <div className={syles.role}>member</div>
        <div className={syles.dateJoin}>Member since 12th july 1996</div>
        <div className={syles.button}>
          <Button
            title="Chat"
            onClick={() => setPageDispatch(chatPages.CHATPAGE)}
            endIcon={<FontAwesomeIcon icon={faComment} />}
          />
        </div>
      </div>
    </div>
  );
};
