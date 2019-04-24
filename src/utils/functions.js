/**
 * delay function
 * @param {number} ms
 * @returns {promise}
 */
export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

/**
 * check array length function
 * @param {array} array
 * @returns {number} array length
 */
export const chkLength = array => array.length;

/**
 * get token function
 * @returns {string} token
 */
export const getToken = () => {
  return localStorage.getItem("token");
};
