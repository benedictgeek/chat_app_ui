import React, { useReducer, useContext } from "react";
import { chatPages } from "../../../pages/chartPortal/chatPortal";
import { setPortalSwitch, setPage } from "./actions";
import { chatReducer } from "./reducer";

const ChatContext = React.createContext();

export let useChatContext = () => useContext(ChatContext);

let initialState = {
  currentPage: chatPages.MAINPAGE,
  portalSwitch: false,
};

export let ChatContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(chatReducer, initialState);
  const setPortalDispatch = (payload) => {
    setPortalSwitch(payload, dispatch);
  };
  const setPageDispatch = (payload) => {
    setPage(payload, dispatch);
  };
  return (
    <ChatContext.Provider value={{ state, setPortalDispatch, setPageDispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
