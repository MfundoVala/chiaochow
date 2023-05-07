import axios from "axios";

apiBaseUrl = "https://ciaochow.plusnarrative.biz/";

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
    const response = await api.post("api/auth/local", {
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
    const response = await api.post("api/auth/local/register", {
      username,
      email,
      password,
    });

    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

const getChowsAsync = async ({ token }) => {
  try {
    const response = await api.get("api/chows?populate=*", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

function processApiData(data) {
  const chowWithImages = data.data.map((chow) => {
    const images = chow.attributes.Image.data.map((image) => {
      return {
        id: image.id,
        name: image.attributes.name,
        alternativeText: image.attributes.alternativeText,
        caption: image.attributes.caption,
        width: image.attributes.width,
        height: image.attributes.height,
        formats: image.attributes.formats,
        hash: image.attributes.hash,
        ext: image.attributes.ext,
        mime: image.attributes.mime,
        size: image.attributes.size,
        url: "https://ciaochow.plusnarrative.biz" + image.attributes.url,
        previewUrl: image.attributes.previewUrl,
        provider: image.attributes.provider,
        providerMetadata: image.attributes.provider_metadata,
        createdAt: image.attributes.createdAt,
        updatedAt: image.attributes.updatedAt,
      };
    });
    return {
      id: chow.id,
      title: chow.attributes.Title,
      description: chow.attributes.Description,
      images: images,
    };
  });
  return chowWithImages;
}

export { loginAsync, registerAsync, getChowsAsync, processApiData };

export default api;
