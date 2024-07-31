const {StatusCodes} = require('http-status-codes');
const {ErrorResponse} = require('../utils/common');
function validateCreateRequest(req, res, next){
    if(!req.body.modelNumber || !req.body.capacity){
        ErrorResponse.message = 'Something went wrong while creating the airplane';
        ErrorResponse.error = {explaination: 'Model number and capacity are required'};
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ErrorResponse});
    }
    next();
}
module.exports = {
    validateCreateRequest,
};