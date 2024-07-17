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
exports.languagesService = void 0;
const languagesQueryRepository_1 = require("../repositories/queryRepositiories/languagesQueryRepository");
exports.languagesService = {
    findMonths(lang) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const months = yield languagesQueryRepository_1.languagesRepository.findMonths(lang);
                return months;
            }
            catch (err) {
                return "Error";
            }
        });
    },
    findWeekDays(lang) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const weekDays = yield languagesQueryRepository_1.languagesRepository.findWeekDays(lang);
                return weekDays;
            }
            catch (err) {
                return "Error";
            }
        });
    },
};
