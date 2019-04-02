import axios from "axios";

const API_URL = process.env.REACT_APP_DEV_API_URL;
const SIGNUP_URL = `${API_URL}/register`;
const LOGIN_URL = `${API_URL}/login`;
const AUTH_URL = `${API_URL}/authenticated`;

export default class Api {
  static async signup(data) {
    const resp = await axios.post(SIGNUP_URL, data);
    return resp.data;
  }

  static async login(data) {
    const resp = await axios.post(LOGIN_URL, data);
    return resp.data;
  }

  static async authenticateUser() {
    const token = localStorage.getItem("token");
    const init = {
      headers: {
        authorization: `Bearer ${token}`
      }
    };
    const resp = await axios.get(AUTH_URL, init);
    return resp.data;
  }
}
