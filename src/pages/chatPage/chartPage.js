import MemberTile from "../../components/memberTile/memberTile";
import { ChatPageHeaderWrapper } from "../../utils/chatPageHeaderWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import styles from "./chartPage.module.scss";
export let ChartPage = () => {
  return (
    <div className={styles.mainPage}>
      <ChatPageHeaderWrapper>
        <MemberTile isProfile={true} />
      </ChatPageHeaderWrapper>
      <div className={styles.messagesContainer}>
        <MessageBoxSender />
        <MessageBoxSender />
        <DateCategory />
        <MessageBoxRecipient />
      </div>
      <div className={styles.messageInputContainer}>
        <ChatInput />
        <div className={styles.messageInputSendBtn}>
          <FontAwesomeIcon icon={faPaperPlane} />
        </div>
      </div>
    </div>
  );
};

export let DateCategory = () => {
  return (
    <div className={styles.chatDateCatContainer}>
      <div className={styles.chatDate}>today</div>
    </div>
  );
};

export let ChatInput = () => {
  return <textarea rows={1} placeholder={"Type in your message..."} />;
};

export let MessageBoxSender = () => {
  return (
    <div className={styles.chatMessageContainer}>
      <div className={styles.chatMessageBox}>
        <span>
          lorel loeveurvyi dfvyifd ibdfigdfi idfbyidf fdfd lorel loeveurvyi
          dfvyifd ibdfigdfi idfbyidf fdfd
        </span>
        <span className={styles.chatMessageBoxTime}>8:45pm</span>
      </div>
      <div className={styles.triangleTopRight}></div>
    </div>
  );
};

export let MessageBoxRecipient = () => {
  return (
    <div
      className={`${styles.chatMessageContainer} ${styles.chatMessageContainer_r} `}
    >
      <div className={styles.triangleTopleft}></div>
      <div className={`${styles.chatMessageBox} ${styles.chatMessageBox_r} `}>
        <span>
          lorel loeveurvyi dfvyifd ibdfigdfi idfbyidf fdfd lorel loeveurvyi
          dfvyifd ibdfigdfi idfbyidf fdfd
        </span>
        <span className={styles.chatMessageBoxTime}>8:45pm</span>
      </div>
    </div>
  );
};
