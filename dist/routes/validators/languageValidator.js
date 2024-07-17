"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.languageQueryValidator = exports.languageBodyValidator = void 0;
const express_validator_1 = require("express-validator");
exports.languageBodyValidator = (0, express_validator_1.body)("lang")
    .exists().withMessage("entity does not exist")
    .isString().withMessage("entity is not a string")
    .isIn(["en", "fr", "ru"]).withMessage("entity is not equal to 'en', 'fr', or 'ru'");
exports.languageQueryValidator = (0, express_validator_1.query)('lang')
    .exists().withMessage("entity does not exist")
    .isString().withMessage("entity is not a string")
    .isIn(['en', 'ru', 'fr']).withMessage("entity should be only: 'en', 'ru', 'fr'");
