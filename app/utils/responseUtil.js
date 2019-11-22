const { codes } = require('../constants');

class ResponseUtil {
    /**
     * Send json repsonse to client
     * @static
     * @param {number} status status code
     * @param {Object} body response body
     * @param {Object} resp response object
     * @memberof ResponseUtil
     */
    static send(status, body, resp) {
        const statusCode = status[0];
        resp.status(statusCode).json(body);
    }

    /**
     * Select the status code using keys
     * @static
     * @returns {number} status code
     * @memberof ResponseUtil fetch status code by status keys
     */
    static getCode() {
        return codes;
    }
}

module.exports = ResponseUtil;
