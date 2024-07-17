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
exports.languagesQueryRepository = void 0;
const db_1 = require("../db");
exports.languagesQueryRepository = {
    findMonths(lang) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const monthsObject = yield db_1.client.db('calendar').collection("languages").findOne({ "months": { $exists: true } });
                if (monthsObject)
                    return monthsObject.months[lang];
                return "Error";
            }
            catch (err) {
                return "Error";
            }
        });
    },
    findWeekDays(lang) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const weekDaysObject = yield db_1.client.db("calendar").collection("languages").findOne({
                    "weekDays": { $exists: true }
                });
                if (weekDaysObject)
                    return weekDaysObject.weekDays[lang];
                return "Error";
            }
            catch (err) {
                return "Error";
            }
        });
    },
    findNavigationTitles(lang) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const navigationTitlesType = yield db_1.client.db("calendar").collection("languages").findOne({ navigationTitles: { $exists: true } });
                if (navigationTitlesType) {
                    return navigationTitlesType.navigationTitles[lang];
                }
                else
                    return "Error";
            }
            catch (err) {
                return "Error";
            }
        });
    },
    findEventListColorNames(lang) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const eventListColorNamesObject = yield db_1.client.db("calendar").collection("languages").findOne({ "eventListColorNames": { $exists: true } });
                if (eventListColorNamesObject)
                    return eventListColorNamesObject.eventListColorNames[lang];
                else
                    return "Error";
            }
            catch (err) {
                return "Error";
            }
        });
    }
};
