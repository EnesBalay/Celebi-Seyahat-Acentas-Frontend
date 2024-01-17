import { makeApiRequest } from "./requestFactory";
const baseRoute = "auth";

export const loginUser = async (userName, password) => {
  return makeApiRequest(baseRoute + "/login", "post", { password, userName });
};

export const signupUser = async (email, password, userType, userName) => {
  return makeApiRequest(baseRoute + "/signup", "post", {
    email,
    password,
    userType,
    userName,
  });
};

export const getCurrentUser = async () => {
  return makeApiRequest(baseRoute + "/current-user", "get");
};

export const logout = async () => {
  return makeApiRequest(baseRoute + "/logout", "post");
};
