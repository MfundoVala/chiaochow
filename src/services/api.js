import axios from "axios";

apiBaseUrl = "https://ciaochow.plusnarrative.biz/api/";

const api = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

// api.interceptors.request.use(
//   async (config) => {
//     const token = await AsyncStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

const loginAsync = async (email, password) => {
  try {
    const response = await api.post("auth/local", {
      identifier: email,
      password,
    });

    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

const registerAsync = async (username, email, password) => {
  try {
    const response = await api.post("/auth/local/register", {
      username,
      email,
      password,
    });
    const { token } = response.data;
    await AsyncStorage.setItem("token", token);

    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export { loginAsync, registerAsync };

export default api;
