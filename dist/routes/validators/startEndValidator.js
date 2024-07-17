"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startEndValidator = void 0;
const express_validator_1 = require("express-validator");
const dayjs_1 = __importDefault(require("dayjs"));
exports.startEndValidator = (0, express_validator_1.body)().custom((body) => {
    const startDateIsValid = (0, dayjs_1.default)().set("year", body.start.year).set("month", body.start.month - 1).set("day", body.start.day).set("hour", body.start.hour).set("minute", body.start.minute).isValid();
    if (!startDateIsValid)
        throw new Error('event start date is not a valid date');
    const endDateIsValid = (0, dayjs_1.default)().set("year", body.end.year).set("month", body.end.month - 1).set("day", body.end.day).set("hour", body.end.hour).set("minute", body.end.minute).isValid();
    if (!endDateIsValid)
        throw new Error('event end date is not a valid date');
    const startDate = (0, dayjs_1.default)().set("year", body.start.year).set("month", body.start.month - 1).set("day", body.start.day).set("hour", body.start.hour).set("minute", body.start.minute);
    const endDate = (0, dayjs_1.default)().set("year", body.end.year).set("month", body.end.month - 1).set("day", body.end.day).set("hour", body.end.hour).set("minute", body.end.minute);
    const isBefore = startDate.isBefore((0, dayjs_1.default)(endDate));
    if (!isBefore)
        throw new Error('event start date is not before the end date');
    return true;
});
