import Avartar from "../../utils/avartar";
import user from "../../assets/images/user-img-placeholder.png";
import styles from "./memberTile.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

export let MemberTile = ({ isMember = false, ...props }) => {
  let userData = props.user
    ? props.user
    : { firstName: "Oliver", lastName: "Gucci", email: "test@me.com" };

  return (
    <div
      className={styles.memberTileContainer}
      style={{ width: props.width && props.width, height: props.height }}
    >
      <div className="avartar">
        <Avartar
          size={"40px"}
          src={userData.profilePicture ? userData.profilePicture : user}
        />
      </div>
      <div className={styles.memberTile}>
        <div className={styles.memberTile_name}>
          {`${userData.firstName + " " + userData.lastName}`}
        </div>
        <div className={styles.memberTile_email}>{`${userData.email}`}</div>
        {!isMember && (
          <div className={styles.memberTile_message}>
            <span>{"some message here "}</span>
            <span>{"9s"}</span>
          </div>
        )}
      </div>
      {isMember && (
        <div>
          <FontAwesomeIcon
            icon={faComment}
            className={styles.memberTile_chat_icon}
          />
        </div>
      )}
    </div>
  );
};

export default MemberTile;
