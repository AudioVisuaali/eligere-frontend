/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  INITIAL_LOAD_USER,
  USER_LOGOUT,
  USER_UPDATE_DISPLAY_NAME,
  LOGIN_SET_USER,
} from './constants';

// The initial state of the App
export const initialState = {
  user: null,
  userLoaded: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case USER_UPDATE_DISPLAY_NAME:
        draft.user.displayName = action.displayName;
        break;

      case USER_LOGOUT:
        draft.user = null;
        draft.polls = null;
        draft.communities = null;
        break;

      case INITIAL_LOAD_USER:
        draft.userLoaded = true;
        draft.user = action.user;
        draft.polls = action.polls;
        draft.communities = action.communities;
        break;

      case LOGIN_SET_USER:
        draft.user = action.user;
        draft.polls = action.polls;
        draft.communities = action.communities;
        break;
    }
  });

export default appReducer;
