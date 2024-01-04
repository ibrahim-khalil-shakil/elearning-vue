import axios from "axios";

export default axios.create({
  baseURL: "http://localhost/elearning/api",
  headers: {
    "Content-type": "application/json"
  }
}); 