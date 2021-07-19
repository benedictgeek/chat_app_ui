import { MainPage } from "../mainPage/mainPage";
import { MemberProfile } from "../memberProfile/memberProfile";
import chartPortalStyles from "./chatPortal.module.scss";

export let ChartPortal = () => {
  return (
    <div className={chartPortalStyles.chatPortalFrame}>
      {/* <MainPage /> */}
      <MemberProfile />
    </div>
  );
};
