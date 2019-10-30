export const LOG_IN = 'LOG_IN'
export const LOG_IN_FAIL = 'LOG_IN_FAIL'

const checkLogin = (params) => {
  if (params.username.toLowerCase() === 'admin' &&
    params.password === '12345') {
    return true;
  }
  return false;
}

export function logIn(params) {
  if (checkLogin(params)) {
    return {
      type: LOG_IN,
      payload: {
        username: params.username,
      }
    };
  } else {
    return {
      type: LOG_IN_FAIL,
      payload: {
        errorMsg: 'Имя пользователя или пароль введены не верно',
      }
    };
  }
}