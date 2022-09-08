export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUsername = state => state.auth.user.name;
export const getUserEmail = state => state.auth.user.email;
export const getIsLoadingStatus = state => state.auth.isFetchingCurrentUser;
export const getAuthError = state => state.auth.error;
