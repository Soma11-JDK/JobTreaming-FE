import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import { Map } from 'immutable';
import * as AuthAPI from 'lib/api/auth';

const CHANGE_INPUT = 'auth/CHANGE_INPUT'; // input 값 변경
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM'; // form 초기화

const CHECK_EMAIL_EXISTS = 'auth/CHECK_EMAIL_EXISTS'; // 이메일 중복 확인
const SERVER_REGISTER = 'auth/SERVER_REGISTER'; // 이메일 가입
const SET_ERROR = 'auth/SET_ERROR'; // 오류 설정

const USER_MODIFY = 'auth/USER_MODIFY'; // 유저 수정

export const checkEmailExists = createAction(
  CHECK_EMAIL_EXISTS,
  AuthAPI.checkEmailExists,
); // email
export const serverRegister = createAction(
  SERVER_REGISTER,
  AuthAPI.serverRegister,
); // { email, imageURL, username, phone }

export const userModify = createAction(USER_MODIFY, AuthAPI.userModify); // { email, imageURL, username, phone }

export const changeInput = createAction(CHANGE_INPUT); //  { form, name, value }
export const initializeForm = createAction(INITIALIZE_FORM); // form

export const setError = createAction(SET_ERROR); // { form, message }

const defaultProfileImg = require('assets/DefaultProfile/DefaultProfile.png');

const initialState = Map({
  register: Map({
    form: Map({
      email: '',
      imageURL: defaultProfileImg,
      username: '',
      phone: '',
    }),
    exists: Map({
      email: false,
    }),
    error: null,
  }),
  result: Map({}),
});

export default handleActions(
  {
    [CHANGE_INPUT]: (state, action) => {
      const { form, name, value } = action.payload;
      return state.setIn([form, 'form', name], value);
    },
    [INITIALIZE_FORM]: (state, action) => {
      const initialForm = initialState.get(action.payload);
      return state.set(action.payload, initialForm);
    },
    ...pender({
      type: CHECK_EMAIL_EXISTS,
      onSuccess: (state, action) =>
        state.setIn(
          ['register', 'exists', 'email'],
          action.payload.data.exists,
        ),
    }),
    ...pender({
      type: SERVER_REGISTER,
      onSuccess: (state, action) =>
        state.set('result', Map(action.payload.data)),
    }),
    ...pender({
      type: USER_MODIFY,
      onSuccess: (state, action) =>
        state.set('result', Map(action.payload.data)),
    }),
    [SET_ERROR]: (state, action) => {
      const { form, message } = action.payload;
      return state.setIn([form, 'error'], message);
    },
  },
  initialState,
);
