import axios from "axios";
import { URL } from "../config/api";

const instance = axios.create({
  baseURL: URL,
});

export default instance;
