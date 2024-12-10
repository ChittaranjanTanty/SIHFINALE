const mLogbook = require('../schema/mlogbookschema');
const BadRequestError = require('../utils/badRequestError');
const InternalServerError = require('../utils/internalServerError');

async function createLogbook(logbookDetails) {
    try {
        const response = await mLogbook.create(logbookDetails);
        return response;
    } catch (error) {
        if (error.name === 'ValidationError') {
            const errorMessageList = Object.keys(error.errors).map((property) => {
                return error.errors[property].message;
            });
            console.log(errorMessageList);
            throw new BadRequestError(errorMessageList);
        }
        console.error(error);
        throw new InternalServerError();
    }
}

module.exports = {
    createLogbook,
};
