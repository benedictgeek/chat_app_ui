import React, { useReducer, useContext } from "react";
import { chatPages } from "../../../pages/chartPortal/chatPortal";
import { tabOptions } from "../../../pages/mainPage/mainPage";
import { setPortalSwitch, setPage, setMainPageTab } from "./actions";
import { chatReducer } from "./reducer";

const ChatContext = React.createContext();

export let useChatContext = () => useContext(ChatContext);

let initialState = {
  currentPage: chatPages.MAINPAGE,
  portalSwitch: false,
  currentMainPageTab: tabOptions.CHAT,
};

export let ChatContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(chatReducer, initialState);
  const setPortalDispatch = (payload) => {
    setPortalSwitch(payload, dispatch);
  };
  const setPageDispatch = (payload) => {
    setPage(payload, dispatch);
  };

  const setMainPageDispatch = (payload) => {
    setMainPageTab(payload, dispatch);
  };
  return (
    <ChatContext.Provider
      value={{ state, setPortalDispatch, setPageDispatch, setMainPageDispatch }}
    >
      {children}
    </ChatContext.Provider>
  );
};
