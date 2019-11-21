const { codes } = require('../constants');

class ResponseUtil {
    static send(status, body, resp) {
        const statusCode = status[0];
        resp.status(statusCode).json(body);
    }

    static getCode() {
        return codes;
    }
}

module.exports = ResponseUtil;