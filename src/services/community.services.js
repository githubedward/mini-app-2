import axios from "axios";
import { authInit } from "./helper";

const API_URL = process.env.REACT_APP_DEV_API_URL;
const COMMUNITY_URL = `${API_URL}/users/all`;

export default class communityApi {
  /**
   * get community function
   * @returns {object} return api payload
   */
  static async getCommunity() {
    try {
      const resp = await axios.get(COMMUNITY_URL, authInit());
      return resp.data;
    } catch (err) {
      // insert error handler later
      console.log(err);
    }
  }
}
