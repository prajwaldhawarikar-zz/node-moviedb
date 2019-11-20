const { responseUtil } = require('../../utils');


exports.getPerson = async function (req, res, next) {
    responseUtil.send(responseUtil.getCode().OK, {
        message: 'checked',
    }, res);
};
