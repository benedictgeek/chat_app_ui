import MemberTile from "../../components/memberTile/memberTile";
import { ChatPageHeaderWrapper } from "../../utils/chatPageHeaderWrapper";
import styles from "./chartPage.module.scss";
export let ChartPage = () => {
  return (
    <div>
      <ChatPageHeaderWrapper>
        <MemberTile isProfile={true} />
      </ChatPageHeaderWrapper>
      <div>
        <MessageBoxSender />
        <MessageBoxSender />
        <MessageBoxRecipient />
      </div>
      <div></div>
    </div>
  );
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
