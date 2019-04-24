import axios from "axios";

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
    const resp = axios.post(`${USERPLACES_URL}/${data.user_id}`, data);
    return resp.data;
  }

  /**
   * get all places function
   * @returns {object} return api payload
   */
  static async getAllPlaces() {
    const resp = axios.get(ALLPLACES_URL);
    return resp.data;
  }
}
