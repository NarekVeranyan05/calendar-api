"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.languageValidator = void 0;
const express_validator_1 = require("express-validator");
exports.languageValidator = (0, express_validator_1.query)('lang')
    .exists().withMessage("entity does not exist")
    .isString().withMessage("entity is not a string")
    .isIn(['en', 'ru', 'fr']).withMessage("entity should be only: 'en', 'ru', 'fr'");
