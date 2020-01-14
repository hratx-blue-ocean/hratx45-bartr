import axios from "axios";

export default axios.create({
  // baseURL: 'http://api-server.escxwv87wi.us-west-2.elasticbeanstalk.com/api'
  baseURL: "http://localhost:3000/api"
});
