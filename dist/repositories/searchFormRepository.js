"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchFormRepository = void 0;
const db_1 = require("./db");
exports.searchFormRepository = {
    checkFormWithYearMonth: (lang, monthName) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const monthsObject = yield db_1.client.db('calendar').collection("languages").findOne({ "months": { $exists: true } });
            if (monthsObject) {
                return monthsObject.months[`${lang}`].indexOf(monthName);
            }
            else
                return "Error";
        }
        catch (err) {
            return "Error";
        }
    }),
    checkFormWithYearMonthDay: (lang, year, monthName, dayOfMonth) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const monthsObject = yield db_1.client.db('calendar').collection("languages").findOne({ "months": { $exists: true } });
            if (monthsObject) {
                console.log(year + ", " + monthName + ", " + dayOfMonth + "\n");
                console.log(new Date(year, monthsObject.months[`${lang}`].indexOf(monthName) + 1, 0).getDate());
                if (dayOfMonth > 0 && dayOfMonth <= new Date(year, monthsObject.months[`${lang}`].indexOf(monthName) + 1, 0).getDate()) {
                    return monthsObject.months[`${lang}`].indexOf(monthName);
                }
                else
                    return "Error";
            }
            else
                return "Error";
        }
        catch (err) {
            return "Error";
        }
    })
};
