import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import * as AuthAPI from 'lib/api/auth';
import { pender } from 'redux-pender';

const SET_LOGGED_INFO = 'user/SET_LOGGED_INFO'; // 로그인 정보 설정
const SET_VALIDATED = 'user/SET_VALIDATED'; // validated 값 설정

export const setLoggedInfo = createAction(SET_LOGGED_INFO); // loggedInfo
export const setValidated = createAction(SET_VALIDATED); // validated

const defaultProfileImg = require('assets/DefaultProfile/DefaultProfile.png');

const initialState = Map({
  loggedInfo: Map({
    // 현재 로그인중인 유저의 정보
    token: null,
    user: Map({
      email: null,
      imageURL: defaultProfileImg,
      name: null,
      phone: null,
    }),
  }),
  logged: false, // 현재 로그인중인지 알려준다
});

export default handleActions(
  {
    [SET_LOGGED_INFO]: (state, action) =>
      state.set('loggedInfo', Map(action.payload)).set('logged', true),
  },
  initialState,
);
