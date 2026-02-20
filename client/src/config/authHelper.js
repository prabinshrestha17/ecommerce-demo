const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export const authStore = {
  set(session) {
    localStorage.setItem("accessToken", session.accessToken);
    localStorage.setItem("user", JSON.stringify(session.user));
  },
  clear() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
  },
  token() {
    return localStorage.getItem("accessToken");
  },
  user() {
    const raw = localStorage.getItem("user");
    return raw ? JSON.parse(raw) : null;
  },
};

export async function api(path, options = {}) {
  const token = authStore.token();
  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers,
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data?.message || "Request failed");
  return data;
}

export const authApi = {
  register: body =>
    api("/auth/register", { method: "POST", body: JSON.stringify(body) }),
  login: body =>
    api("/auth/login", { method: "POST", body: JSON.stringify(body) }),
  me: () => api("/users/me"),
  updateMe: body =>
    api("/users/me", { method: "PATCH", body: JSON.stringify(body) }),
};

export const orderApi = {
  myOrders: () => api("/orders/user-orders"),
  sellerOrders: () => api("/orders"),
};
