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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSearchFormRouter = void 0;
const express_1 = __importDefault(require("express"));
const languageValidator_1 = require("./validators/languageValidator");
const monthNameValidator_1 = require("./validators/monthNameValidator");
const yearValidator_1 = require("./validators/yearValidator");
const statusCodes_1 = require("../statusCodes");
const searchFormService_1 = require("../domain/searchFormService");
const dayValidator_1 = require("./validators/dayValidator");
const errorsCollector_1 = require("./validators/errorsCollector");
const getSearchFormRouter = () => {
    const searchFormRouter = express_1.default.Router();
    //monthName and dayOfMonth are optional
    searchFormRouter.post("/", yearValidator_1.yearBodyValidator, monthNameValidator_1.monthNameBodyValidator, dayValidator_1.dayBodyValidator, languageValidator_1.languageBodyValidator, errorsCollector_1.errorsCollector, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        if (!req.body.monthName) { }
        else if (!req.body.dayOfTheMonth) {
            const response = yield searchFormService_1.searchFormService.checkFormWithYearMonth(req.body.lang, req.body.monthName);
            if (response !== "Error") {
                res.json({
                    resultCode: 0,
                    data: { monthIndex: response }
                });
            }
            else
                res.sendStatus(statusCodes_1.statusCodes.INTERNAL_SERVER_ERROR_500);
        }
        else {
            debugger;
            const response = yield searchFormService_1.searchFormService.checkFormWithYearMonthDay(req.body.lang, req.body.year, req.body.monthName, req.body.dayOfTheMonth);
            if (response !== "Error") {
                res.json({
                    resultCode: 0,
                    data: { monthIndex: response }
                });
            }
            else
                res.sendStatus(statusCodes_1.statusCodes.INTERNAL_SERVER_ERROR_500);
        }
    }));
    return searchFormRouter;
};
exports.getSearchFormRouter = getSearchFormRouter;
