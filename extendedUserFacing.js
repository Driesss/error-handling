'use strict';

const {UserFacingError} = require('./baseClass');

class BadRequestError extends UserFacingError {
    get statCode() {
        return 400;
    }
}

class NotFoundError extends UserFacingError {
    get statusCode() {
        return 404;
    }
}

module.exports = {
    BadRequestError,
    NotFoundError
};
