import styles from "./mainPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import MemberTile from "../../components/memberTile/memberTile";
import { useChatContext } from "../../state/contextProviders/chatContext/chatContext";

export let MainPage = () => {
  let { state } = useChatContext();
  let { currentMainPageTab } = state;
  let isMember = currentMainPageTab == tabOptions.MEMBERS;
  return (
    <div className={styles.mainPage}>
      <div className={styles.detailsSection}>
        <div className={styles.assName}>My Association</div>
        <span className={styles.assMotto}>moving onwars and forward</span>
        <div className={styles.membersCount}>
          <FontAwesomeIcon icon={faUsers} color={"white"} size="1x" />
          <span className={styles.membersCountNum}>23</span>
        </div>
        <TabSection />
      </div>
      <div className={styles.itemsContainer}>
        <MemberTile isMember={isMember} />
        <MemberTile isMember={isMember} />
        <MemberTile isMember={isMember} />
        <MemberTile isMember={isMember} />
        <MemberTile isMember={isMember} />
        <MemberTile isMember={isMember} />
        <MemberTile isMember={isMember} />
      </div>
    </div>
  );
};

export let TabSection = () => {
  let { state, setMainPageDispatch } = useChatContext();
  let { currentMainPageTab } = state;
  return (
    <div className={styles.tabSection}>
      <div
        className={
          currentMainPageTab == tabOptions.CHAT
            ? styles.activeTab
            : styles.inActiveTab
        }
        onClick={() => setMainPageDispatch(tabOptions.CHAT)}
      >
        CHATS (3)
      </div>
      <div
        className={
          currentMainPageTab == tabOptions.MEMBERS
            ? styles.activeTab
            : styles.inActiveTab
        }
        onClick={() => setMainPageDispatch(tabOptions.MEMBERS)}
      >
        MEMBERS
      </div>
    </div>
  );
};

export const tabOptions = {
  CHAT: "chat",
  MEMBERS: "members",
};
