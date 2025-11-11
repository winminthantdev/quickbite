const BASE_URL = import.meta.env.VITE_API_URL;

const request = async (endpoint, options = {}) => {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      ...options,
    });

    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);  
    }

    return await res.json();
  } catch (err) {
    console.error("API request failed:", err);
    throw err;
  }
};

// ------- START FETCH DATA --------

import users from "./data/user.json";
import products from "./data/products.json";
import categories from "./data/categories.json";

// ------- PRODUCTS --------

export const fetchProducts = async () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(products);
    })
  );
};

export const fetchProductsById = async (id) => {
  const products = products.filter(product=> product._id === id) || [];
  return products;
};

export const searchProducts = async (query) => {
  if (!query) return [];

  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        product.subCategory.toLowerCase().includes(query.toLowerCase()) 
      );
      resolve(filtered);
    }, 300);
  });
};


// ------- CATEGORIES --------

export const fetchCategories = async () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      const all = Object.values(categories).flat();
      const unique = [...new Set(all)];
      resolve(unique);
    })
  );
};


// ------- END FETCH DATA --------


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

// ------- ORDERS  --------

// ------- ADD ORDERS  --------
export const createOrder = async (orderData) => {
  const auth = JSON.parse(localStorage.getItem("auth"));
  if (!auth?.userid) {
    return { success: false, message: "Not logged in" };
  }

  const datePart = new Date().toISOString().slice(0,10).replace(/-/g, "");
  const timePart = Date.now().toString().slice(-4); 
  const randomPart = Math.floor(Math.random() * 10000);
  const orderId = `ORD-${datePart}-${timePart}-${randomPart}`;

  const newOrder = {
    ...orderData,
    status: "Order Placed",
    isPaid: orderData.paymentMethod === "Online" ? true : false ,
    orderId,
    userId: auth.userid,
    createdAt: new Date().toISOString(),
  };

  const orders = JSON.parse(localStorage.getItem("orders") || "[]")

  orders.push(newOrder);

  localStorage.setItem("orders", JSON.stringify(orders));
  return { success: true, order: newOrder };
};


// ------- GET ORDERS  --------
export const fetchUserOrders = () => {
  const auth = JSON.parse(localStorage.getItem("auth"));
  if (!auth?.userid) return [];

  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  const userorders = orders.filter(order=>order.userId === auth.userid)
  return userorders;
};

