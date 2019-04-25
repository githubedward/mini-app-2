import axios from "axios";
import { authInit } from "./helper";

const API_URL = process.env.REACT_APP_DEV_API_URL;
const PLACES_URL = `${API_URL}/places`;
const ALLPLACES_URL = `${PLACES_URL}/all`;
const USERPLACES_URL = `${PLACES_URL}/by-user`;

export default class placesApi {
  /**
   * add a place function
   * @param {object} data
   * @returns {object} return api payload
   */
  static async addPlace(data) {
    try {
      const resp = await axios.post(USERPLACES_URL, data, authInit());
      return resp.data;
    } catch (err) {
      // insert error handler later
      console.log(err);
    }
  }

  /**
   * get all places function
   * @returns {object} return api payload
   */
  static async getAllPlaces() {
    try {
      const resp = await axios.get(ALLPLACES_URL, authInit());
      return resp.data;
    } catch (err) {
      // insert error handler later
      console.log(err);
    }
  }
}
