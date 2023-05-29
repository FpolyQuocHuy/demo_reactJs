const initState = {
    isLoggedIn: false,
    user: null,
    error: null,
  };
  
  const loginReducer = (state = initState, action) => {
    switch (action.type) {
      case 'Login_success':
        return {
          ...state,
          isLoggedIn: true,
          user: action.payload,
          error: null,
        };
      case 'Login_fail':
        return {
          ...state,
          isLoggedIn: false,
          user: null,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default loginReducer;