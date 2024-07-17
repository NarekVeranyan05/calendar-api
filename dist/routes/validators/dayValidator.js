"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endDayBodyValidator = exports.startDayBodyValidator = exports.dayBodyValidator = exports.dayParamValidator = exports.dayQueryValidator = void 0;
const express_validator_1 = require("express-validator");
exports.dayQueryValidator = (0, express_validator_1.query)("day")
    .optional({ checkFalsy: true })
    .isNumeric().withMessage("entity is not a number")
    .isInt({ min: 0, max: 31 }).withMessage("entity is not an integer between 0 and 31");
exports.dayParamValidator = (0, express_validator_1.param)("day")
    .isNumeric().withMessage("entity is not a number")
    .isInt({ min: 0, max: 31 }).withMessage("entity is not an integer between 0 and 31");
exports.dayBodyValidator = (0, express_validator_1.body)("dayOfTheMonth")
    .optional({ checkFalsy: true })
    .isNumeric().withMessage("entity is not a number")
    .isInt({ min: 0, max: 31 }).withMessage("entity is not an integer between 0 and 31");
exports.startDayBodyValidator = (0, express_validator_1.body)("start.day")
    .isNumeric().withMessage("entity is not a number")
    .isInt({ min: 0, max: 31 }).withMessage("entity is not an integer between 0 and 31");
exports.endDayBodyValidator = (0, express_validator_1.body)("end.day")
    .isNumeric().withMessage("entity is not a number")
    .isInt({ min: 0, max: 31 }).withMessage("entity is not an integer between 0 and 31");
