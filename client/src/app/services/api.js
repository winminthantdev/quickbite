const BASE_URL = import.meta.env.VITE_API_BASE_URL;

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

import products from "./data/products.json";


// ------- CATEGORIES --------

export const fetchCategories = async () => {
  return request("/categories");
};

// ----- featch SubCategories
export const fetchSubCategories = async () => {
  return request("/subcategories");
};

// ------- PRODUCTS --------

export const fetchProducts = async ({ searchText, statusId, pageSize, is_promotion }) => {
  const params = new URLSearchParams();

  if (searchText) params.append('search', searchText);
  if (statusId) params.append('status_id', statusId);
  if (pageSize) params.append('per_page', pageSize);
  if (pageSize) params.append('is_promotion', is_promotion);

  return request(`/menus?${params.toString()}`);
};
  

export const fetchProductsById = async (id) => {
  return request(`/menus/${id}`);
};

export const fetchRelatedProducts = async (id) => {
  return request(`/menus/${id}/related`);
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



// ------- END FETCH DATA --------

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

