const {StatusCodes} = require('http-status-codes');
function validateCreateRequest(req, res, next){
    if(!req.body.modelNumber || !req.body.capacity){
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json({
            sucess: false,
            message: 'Model number and capacity are required',
            data:{},
        });
    }
    next();
}
module.exports = {
    validateCreateRequest,
};