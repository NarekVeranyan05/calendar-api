"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monthNameBodyValidator = void 0;
const express_validator_1 = require("express-validator");
exports.monthNameBodyValidator = (0, express_validator_1.body)("month")
    .optional({ checkFalsy: true })
    .isString().withMessage("entity is not a string")
    .isIn([
    // English
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",
    // Russian
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь",
    // French
    "Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"
]).withMessage("entity is not a month name");
