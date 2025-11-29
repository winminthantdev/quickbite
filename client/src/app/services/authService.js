import users from "./data/user.json";

// ------- START AUTH  --------
export const loginUser = (email, password) => {
  if (!email || !password) {
    return { success: false, message: "Email and password are required" };
  }

  console.log(users);
  
  const user = users.find(
    usr => usr.email === email.trim() && usr.password === password
  );

  if (user) {
    // Save user in localStorage
    localStorage.setItem("auth", JSON.stringify({userid : user._id}));
    return { success: true };
  }

  return { success: false, message: "Email or password incorrect" };
};

export const checkAuth = () => {
  const auth = localStorage.getItem("auth");
  if(auth){
    return true
  }
};

export const logoutUser = () => {
  localStorage.removeItem("auth");
  return { success: true };
};

export const getUserInfo = () => {
  const auth = JSON.parse(localStorage.getItem("auth"));
  if (!auth?.userid) {
    return { success: false, message: "Not logged in" };
  }  
  const user = users.find(user=> user._id === auth.userid);

  return user ? {userinfo : user} : null;
}

// ------- END AUTH --------
