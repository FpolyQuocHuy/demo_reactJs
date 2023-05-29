export const loginSuccess = (user) => ({
    type: 'Login_success',
    payload: user,
  });
  
  export const loginFailure = (error) => ({
    type: 'Login_fail',
    payload: error,
  });