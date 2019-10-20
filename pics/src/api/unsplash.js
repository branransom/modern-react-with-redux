import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID dfa130c4e51310e52708fcdb4d75f5c222da90229037433bd826e45cb107431e"
  }
});
