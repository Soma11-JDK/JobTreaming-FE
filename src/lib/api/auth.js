import { loginApi } from 'api';

export const checkEmailExists = email => loginApi.socialLogin(email);
export const serverRegister = body => loginApi.signUp(body);
