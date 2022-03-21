import axios from "axios";
import { URL } from "../config/api";

const instance = axios.create({
  baseURL: "http://localhost:8080/index.php?rest_route=/pokemon/v1/custom",
});

export default instance;
