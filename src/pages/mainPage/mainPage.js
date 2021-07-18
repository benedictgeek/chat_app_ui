import styles from "./mainPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

export let MainPage = () => {
  return (
    <div>
      <div className={styles.detailsSection}>
        <div className={styles.assName}>My Association</div>
        <span className={styles.assMotto}>moving onwars and forward</span>
        <div className={styles.membersCount}>
          <FontAwesomeIcon icon={faUsers} color={"white"} size="1x" />
          <span className={styles.membersCountNum}>23</span>
        </div>

        <div className={styles.tabSection}>
          <div className={styles.activeTab}>CHATS</div>
          <div className={styles.inActiveTab}>MEMBERS</div>
        </div>
      </div>
    </div>
  );
};
