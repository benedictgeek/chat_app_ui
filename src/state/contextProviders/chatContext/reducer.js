import { SET_PORTAL_SWITCH, SET_PAGE, SET_MAIN_PAGE } from "./types";

export const chatReducer = (state, action) => {
  switch (action.type) {
    case SET_PORTAL_SWITCH:
      return {
        ...state,
        portalSwitch: action.payload,
      };
    case SET_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_MAIN_PAGE:
      return {
        ...state,
        currentMainPageTab: action.payload,
      };
    default:
      return state;
  }
};
