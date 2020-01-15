import axios from "axios";

export default axios.create({
  baseURL: "https://paperclip.link/api"
  // baseURL: "http://localhost:3000/api"
});
