import axios from "axios";

const apiKey = "f0zGmmjCLLMOEnrPb008o6D3s4V3M2K0";

const giphyApi = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs",
  params: {
    api_key: apiKey,
  },
});

export default giphyApi
// giphyApi.get("/random").then((resp) => {
//   const { data } = resp.data;
//   const { url } = data.images.original;

//   const img = document.createElement("img");
//   img.src = url;

//   document.body.append(img);
// });
