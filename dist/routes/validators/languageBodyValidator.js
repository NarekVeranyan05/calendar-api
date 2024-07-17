"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.languageBodyValidator = void 0;
const express_validator_1 = require("express-validator");
exports.languageBodyValidator = (0, express_validator_1.body)("currentLanguage")
    .exists().withMessage("entity does not exist")
    .isString().withMessage("entity is not a string")
    .isIn(["en", "fr", "ru"]).withMessage("entity is not equal to 'en', 'fr', or 'ru'");
