export const STORE_USER = "STORE_USER";

export const storeUSER = (userData) => {
  return {
    type: STORE_USER,
    userData: userData,
  };
};
