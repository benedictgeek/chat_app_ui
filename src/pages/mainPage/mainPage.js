import styles from "./mainPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import MemberTile from "../../components/memberTile/memberTile";

export let MainPage = () => {
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
        <MemberTile />
        <MemberTile />
        <MemberTile />
        <MemberTile />
        <MemberTile />
        <MemberTile />
        <MemberTile />
      </div>
    </div>
  );
};

export let TabSection = () => {
  return (
    <div className={styles.tabSection}>
      <div className={styles.activeTab}>CHATS (3)</div>
      <div className={styles.inActiveTab}>MEMBERS</div>
    </div>
  );
};
