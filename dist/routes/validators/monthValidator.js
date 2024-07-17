"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endMonthBodyValidator = exports.startMonthBodyValidator = exports.monthBodyValidator = exports.monthParamValidator = exports.monthQueryValidator = void 0;
const express_validator_1 = require("express-validator");
exports.monthQueryValidator = (0, express_validator_1.query)("month")
    .optional({ checkFalsy: true })
    .isNumeric().withMessage("entity is not a number")
    .isInt({ min: 1, max: 12 }).withMessage("entity is not an integer between 1 and 12");
exports.monthParamValidator = (0, express_validator_1.param)("month")
    .isNumeric().withMessage("entity is not a number")
    .isInt({ min: 1, max: 12 }).withMessage("entity is not an integer between 1 and 12");
exports.monthBodyValidator = (0, express_validator_1.body)("month")
    .isNumeric().withMessage("entity is not a number")
    .isInt({ min: 1, max: 12 }).withMessage("entity is not an integer between 1 and 12");
exports.startMonthBodyValidator = (0, express_validator_1.body)("start.month")
    .isNumeric().withMessage("entity is not a number")
    .isInt({ min: 1, max: 12 }).withMessage("entity is not an integer between 1 and 12");
exports.endMonthBodyValidator = (0, express_validator_1.body)("end.month")
    .isNumeric().withMessage("entity is not a number")
    .isInt({ min: 1, max: 12 }).withMessage("entity is not an integer between 1 and 12");
