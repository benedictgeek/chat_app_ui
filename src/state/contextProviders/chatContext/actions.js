import { SET_PORTAL_SWITCH, SET_PAGE } from "./types";

export let setPortalSwitch = (payload, dispatch) => {
  dispatch({ type: SET_PORTAL_SWITCH, payload: payload });
};

export let setPage = (payload, dispatch) => {
  dispatch({ type: SET_PAGE, payload: payload });
};
