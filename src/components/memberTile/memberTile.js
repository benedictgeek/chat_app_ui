import Avartar from "../../utils/avartar";
import user from "../../assets/images/user-img-placeholder.png";
import styles from "./memberTile.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { useChatContext } from "../../state/contextProviders/chatContext/chatContext";
import { chatPages } from "../../pages/chartPortal/chatPortal";

export let MemberTile = ({ isMember = false, isProfile = false, ...props }) => {
  let { setPageDispatch } = useChatContext();
  let userData = props.user
    ? props.user
    : { firstName: "Oliver", lastName: "Gucci", email: "test@me.com" };

  return (
    <div
      className={styles.memberTileContainer}
      style={{
        width: props.width && props.width,
        height: props.height,
        borderBottom: isProfile && "none",
      }}
      onClick={() =>
        setPageDispatch(isMember ? chatPages.PROFILEPAGE : chatPages.CHATPAGE)
      }
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
        {!isMember && !isProfile && (
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
