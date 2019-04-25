import axios from "axios";
import { authInit } from "./helper";

const API_URL = process.env.REACT_APP_DEV_API_URL;
const SIGNUP_URL = `${API_URL}/register`;
const LOGIN_URL = `${API_URL}/login`;
const AUTH_URL = `${API_URL}/authenticated`;

export default class authApi {
  /**
   * signup function
   * @param {object} data
   * @returns {object} api payload
   */
  static async signup(data) {
    const resp = await axios.post(SIGNUP_URL, data);
    return resp.data;
  }

  /**
   * login function
   * @param {object} data
   * @returns {object} api payload
   */
  static async login(data) {
    const resp = await axios.post(LOGIN_URL, data);
    return resp.data;
  }

  /**
   * user auth function
   * @param {object} data
   * @returns {object} api payload
   */
  static async authenticateUser() {
    const resp = await axios.get(AUTH_URL, authInit());
    return resp.data;
  }
}
