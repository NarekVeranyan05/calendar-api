"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorsCollector = void 0;
const express_validator_1 = require("express-validator");
const statusCodes_1 = require("../../statusCodes");
const errorsCollector = (req, res, next) => {
    const result = (0, express_validator_1.validationResult)(req);
    if (result.isEmpty()) {
        return next();
    }
    return res.status(statusCodes_1.statusCodes.BAD_REQUEST_400).json({
        resultCode: 1,
        messages: result.array(),
        data: {}
    });
};
exports.errorsCollector = errorsCollector;
