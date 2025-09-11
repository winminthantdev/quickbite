const BASE_URL = import.meta.env.VITE_API_URL;

const request = async (endpoint, options = {}) => {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      headers: { "Content-Type": "application/json" },
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

export const fetchProducts = () => request("/api/products");

export const fetchFooterLinks = () => request("/api/footer-links");

export const createOrder = (orderData) => {
  localStorage.setItem('orders',JSON.stringify(orderData));
}
