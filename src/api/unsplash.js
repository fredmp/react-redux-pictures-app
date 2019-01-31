import Axios from "axios";

const unsplashApi = Axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID a1f844fd1386f89c4b3d4c5d33f998bbd8ec4d50257e10034ed0522fb5d9b957"
  }
});

const searchPhotos = (query) => unsplashApi.get('/search/photos', {
  params: { query }
});

export {
  unsplashApi,
  searchPhotos
};
