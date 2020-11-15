import { loginApi } from 'api';

export const checkEmailExists = email => loginApi.socialLogin(email);
export const serverRegister = (email, imageURL, nickname, phone) =>
  loginApi.signUp(email, imageURL, nickname, phone);
