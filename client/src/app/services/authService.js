import users from "./data/user.json";

// ------- START AUTH  --------
// export const loginUser = (email, password) => {
//   if (!email || !password) {
//     return { success: false, message: "Email and password are required" };
//   }

//   console.log(users);
  
//   // const user = users.find(
//   //   usr => usr.email === email.trim() && usr.password === password
//   // );
//   // const user = http://127.0.0.1:8000/api/v1/admin/login



//   if (user) {
//     // Save user in localStorage
//     localStorage.setItem("auth", JSON.stringify({userid : user._id}));
//     return { success: true };
//   }

//   return { success: false, message: "Email or password incorrect" };
// };

export const loginUser = async (email, password) => {

  if(!email || !password){
      return { success: false, message: "Email and password are required" };
  }

  try{
    const response = await fetch("http://127.0.0.1:8000/api/v1/admin/login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        email: email.trim(),
        password: password
      })
    })

    const data = await response.json();

    console.log(response,data);

     if (!response.ok) {
      return {
        success: false,
        message: data.message || "Login failed",
      };
    }

    localStorage.setItem(
      "auth",
      JSON.stringify({
        token: data.token,
        user: data.user,
      })
    );

    return { success: true };
    

  }catch(error){
    console.error(error);
    return {
      success: false,
      message: "Server error. Try again later.",
    };
  }
}

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
