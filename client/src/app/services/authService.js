const API_BASE = import.meta.env.VITE_API_BASE_URL;

// ---------------- LOGIN ----------------
export const loginUser = async (email, password) => {
  if (!email || !password) {
    return { success: false, message: "Email and password are required" };
  }

  try {
    const response = await fetch(`${API_BASE}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: email.trim(),
        password,
      }),
    });

    const data = await response.json();

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
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Server error. Try again later.",
    };
  }
};

// ---------------- REGISTER USER ----------------
export const registerUser = async (name, email, password) => {
  if(!name || !email || !password){
    return { success: false, message: "Full Name, Email and  Password are required" };
  }

  try {
    const response = await fetch(`${API_BASE}/user/register`, {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        password: password.trim()
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: data.message || "Registation failed",
      };
    }
    return {success: true};

  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Server error. Try again later.",
    };
  }
};


// ---------------- CHECK AUTH ----------------
export const checkAuth = () => {
  const auth = JSON.parse(localStorage.getItem("auth"));
  return !!auth?.token;
};

// ---------------- GET CURRENT USER ----------------
export const getUserInfo = async () => {
  const auth = localStorage.getItem("auth");

  if (!auth) {
    return { success: false, message: "Not authenticated" };
  }

  const { token } = JSON.parse(auth);

  if (!token) {
    return { success: false, message: "Not authenticated" };
  }

  try {
    const response = await fetch(`${API_BASE}/user/profile`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 401) {
      logoutUser();
      return { success: false, message: "Session expired" };
    }

    const data = await response.json();

    return {
      success: true,
      user: data.user || null,
    };

  } catch (error) {
    console.error("getUserInfo error:", error);
    return {
      success: false,
      message: "Network error",
    };
  }
};
  

// ---------------- LOGOUT ----------------
export const logoutUser = async () => {
  const auth = JSON.parse(localStorage.getItem("auth"));

  try {
    if (auth?.token) {
      await fetch(`${API_BASE}/user/logout`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${auth.token}`,
        },
      });
    }
  } catch (error) {
    console.error(error);
  } finally {
    localStorage.removeItem("auth");
  }

  return { success: true };
};
