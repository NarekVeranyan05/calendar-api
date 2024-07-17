"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yearParamValidator = exports.yearQueryValidator = exports.endYearBodyValidator = exports.startYearBodyValidator = exports.yearBodyValidator = void 0;
const express_validator_1 = require("express-validator");
exports.yearBodyValidator = (0, express_validator_1.body)("year")
    .exists().withMessage("entity does not exist")
    .isNumeric().withMessage("entity is not a number");
exports.startYearBodyValidator = (0, express_validator_1.body)("start.year")
    .exists().withMessage("entity does not exist")
    .isNumeric().withMessage("entity is not a number");
exports.endYearBodyValidator = (0, express_validator_1.body)("end.year")
    .exists().withMessage("entity does not exist")
    .isNumeric().withMessage("entity is not a number");
exports.yearQueryValidator = (0, express_validator_1.query)("year")
    .optional({ checkFalsy: true })
    .isNumeric().withMessage("entity is not a number")
    .isInt({ min: 0 }).withMessage("entity is not an integer greater than 0");
exports.yearParamValidator = (0, express_validator_1.param)("year")
    .isNumeric().withMessage("entity is not a number")
    .isInt({ min: 0 }).withMessage("entity is not an integer greater than 0");
