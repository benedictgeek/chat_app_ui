import { MainPage } from "../mainPage/mainPage";
import chartPortalStyles from "./chatPortal.module.scss";

export let ChartPortal = () => {
  return (
    <div className={chartPortalStyles.chatPortalFrame}>
      <MainPage />
    </div>
  );
};
