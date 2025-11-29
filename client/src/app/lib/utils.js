export const authUtils = {
  getToken: () => localStorage.getItem("authToken"),
  setToken: (token) => localStorage.setItem("authToken", token),
  clearToken: () => localStorage.removeItem("authToken"),

  getRole: () => localStorage.getItem("userRole"),
  setRole: (role) => localStorage.setItem("userRole", role),
};
