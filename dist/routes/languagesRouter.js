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
exports.getLanguagesRouter = void 0;
const express_1 = __importDefault(require("express"));
const languageValidator_1 = require("./validators/languageValidator");
const errorsCollector_1 = require("./validators/errorsCollector");
const statusCodes_1 = require("../statusCodes");
const languagesQueryRepository_1 = require("../repositories/queryRepositiories/languagesQueryRepository");
const getLanguagesRouter = () => {
    const languagesRouter = express_1.default.Router();
    languagesRouter.get("/months", languageValidator_1.languageQueryValidator, errorsCollector_1.errorsCollector, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const months = yield languagesQueryRepository_1.languagesQueryRepository.findMonths(req.query.lang);
        if (months !== "Error") {
            return res.json({ resultCode: 0, data: { months: months } });
        }
        return res.status(statusCodes_1.statusCodes.INTERNAL_SERVER_ERROR_500).json({
            resultCode: 1,
            data: {}
        });
    }));
    languagesRouter.get("/weekdays", languageValidator_1.languageQueryValidator, errorsCollector_1.errorsCollector, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const weekDays = yield languagesQueryRepository_1.languagesQueryRepository.findWeekDays(req.query.lang);
        if (weekDays !== "Error")
            return res.json({ data: { weekDays: weekDays }, resultCode: 0 });
        return res.status(statusCodes_1.statusCodes.INTERNAL_SERVER_ERROR_500).json({ data: {}, resultCode: 1 });
    }));
    languagesRouter.get("/navigationTitles", languageValidator_1.languageQueryValidator, errorsCollector_1.errorsCollector, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield languagesQueryRepository_1.languagesQueryRepository.findNavigationTitles(req.query.lang);
            if (response !== "Error") {
                res.json({
                    resultCode: 0,
                    data: {
                        navigationTitles: response
                    }
                });
            }
        }
        catch (err) {
            res.sendStatus(statusCodes_1.statusCodes.INTERNAL_SERVER_ERROR_500);
        }
    }));
    languagesRouter.get("/eventListColorNames", languageValidator_1.languageQueryValidator, errorsCollector_1.errorsCollector, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield languagesQueryRepository_1.languagesQueryRepository.findEventListColorNames(req.query.lang);
        if (response !== "Error")
            return res.json({
                resultCode: 0,
                data: { eventListColorNames: response }
            });
        else
            return res.sendStatus(statusCodes_1.statusCodes.INTERNAL_SERVER_ERROR_500);
    }));
    return languagesRouter;
};
exports.getLanguagesRouter = getLanguagesRouter;
