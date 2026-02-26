import axiosInstance from "./axios";

export const authApi = {
  async login(email, password) {
    try {
      const response = await axiosInstance.post(`/auth/login`, {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async register(username, email, password, role) {
    try {
      const response = await axiosInstance.post(`/auth/register`, {
        username,
        email,
        password,
        role,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async verify(email) {
    try {
      const response = await axiosInstance.post(`/auth/verify`, {
        email,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async verifyAccount(token) {
    try {
      const response = await axiosInstance.get(`/auth/verify-account`, {
        params: { token },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async updateProfile(profileData) {
    try {
      const response = await axiosInstance.patch(`/users/me`, profileData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getProfile() {
    try {
      const response = await axiosInstance.get(`/users/me`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async deleteProfile() {
    try {
      const response = await axiosInstance.delete(`/users/me`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export const userApi = {
  async getMe() {
    try {
      const response = await axiosInstance.get(`/users/me`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async updateMe(profileData) {
    try {
      const response = await axiosInstance.patch(`/users/me`, profileData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async deleteMe() {
    try {
      const response = await axiosInstance.delete(`/users/me`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export const categoryApi = {
  async createCategory(name, description, icon) {
    try {
      const response = await axiosInstance.post(`/categories/create`, {
        name,
        description,
        icon,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getCategories() {
    try {
      const response = await axiosInstance.get(`/categories`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getCategoryById(categoryId) {
    try {
      const response = await axiosInstance.get(`/categories/${categoryId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async updateCategory(categoryId, name, description, icon) {
    try {
      const response = await axiosInstance.put(`/categories/${categoryId}`, {
        name,
        description,
        icon,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async deleteCategory(categoryId) {
    try {
      const response = await axiosInstance.delete(`/categories/${categoryId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export const productApi = {
  async createProduct(
    name,
    productCategory,
    productImage,
    description,
    brand,
    costPrice,
    sellingPrice,
    comparePrice,
    stock,
  ) {
    try {
      const response = await axiosInstance.post(`/products/create`, {
        name,
        productCategory,
        productImage,
        description,
        brand,
        costPrice,
        sellingPrice,
        comparePrice,
        stock,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getProducts() {
    try {
      const response = await axiosInstance.get(`/products`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getProductById(productId) {
    try {
      const response = await axiosInstance.get(`/products/${productId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getProductsByCategory(categoryId) {
    try {
      const response = await axiosInstance.get(
        `/products/get-product-by-category`,
        {
          params: { category: categoryId },
        },
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async updateProduct(
    productId,
    name,
    productCategory,
    productImage,
    description,
    brand,
    costPrice,
    sellingPrice,
    comparePrice,
    stock,
  ) {
    try {
      const response = await axiosInstance.put(`/products/${productId}`, {
        name,
        productCategory,
        productImage,
        description,
        brand,
        costPrice,
        sellingPrice,
        comparePrice,
        stock,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async deleteProduct(productId) {
    try {
      const response = await axiosInstance.delete(`/products/${productId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export const cartApi = {
  async createCart(productId, quantity) {
    try {
      const response = await axiosInstance.post(`/cart/create`, {
        productId,
        quantity,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getCart() {
    try {
      const response = await axiosInstance.get(`/cart`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async updateCartItem(productId, quantity) {
    try {
      const response = await axiosInstance.put(`/cart/update`, {
        productId,
        quantity,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async removeCartItem(productId) {
    try {
      const response = await axiosInstance.delete(`/cart/delete`, {
        data: { productId },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export const orderApi = {
  async createOrder(orderItems, shippingAddress, paymentMethod) {
    try {
      const response = await axiosInstance.post(`/orders/create`, {
        orderItems,
        shippingAddress,
        paymentMethod,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getAllOrders() {
    try {
      const response = await axiosInstance.get(`/orders`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getMyOrders() {
    try {
      const response = await axiosInstance.get(`/orders/user-orders`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getOrderById(orderId) {
    try {
      const response = await axiosInstance.get(`/orders/${orderId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async updateOrderStatus(orderId, status) {
    try {
      const response = await axiosInstance.put(`/orders/${orderId}/status`, {
        status,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async deleteOrder(orderId) {
    try {
      const response = await axiosInstance.delete(`/orders/${orderId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
