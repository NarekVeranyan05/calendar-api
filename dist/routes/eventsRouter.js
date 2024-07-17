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
exports.getEventsRouter = void 0;
const express_1 = __importDefault(require("express"));
const statusCodes_1 = require("../statusCodes");
const yearValidator_1 = require("./validators/yearValidator");
const monthValidator_1 = require("./validators/monthValidator");
const dayValidator_1 = require("./validators/dayValidator");
const eventsService_1 = require("../domain/eventsService");
const errorsCollector_1 = require("./validators/errorsCollector");
const startEndValidator_1 = require("./validators/startEndValidator");
const getEventsRouter = () => {
    const eventsRouter = express_1.default.Router();
    eventsRouter.get("/:year/:month/:day", yearValidator_1.yearParamValidator, monthValidator_1.monthParamValidator, dayValidator_1.dayParamValidator, errorsCollector_1.errorsCollector, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const events = yield eventsService_1.eventsService.findEvents(req.params.year, req.params.month, req.params.day);
        if (events !== "Error")
            return res.json({
                resultCode: 0,
                data: { events: [...events] }
            });
        else
            return res.status(statusCodes_1.statusCodes.INTERNAL_SERVER_ERROR_500).json({
                resultCode: 1,
                data: {}
            });
    }));
    eventsRouter.get("/:year/:month/", yearValidator_1.yearParamValidator, monthValidator_1.monthParamValidator, errorsCollector_1.errorsCollector, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const events = yield eventsService_1.eventsService.findEvents(req.params.year, req.params.month);
        if (events !== "Error")
            return res.json({
                resultCode: 0,
                data: { events: [...events] }
            });
        else
            return res.status(statusCodes_1.statusCodes.INTERNAL_SERVER_ERROR_500).json({
                resultCode: 1,
                data: {}
            });
    }));
    eventsRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield eventsService_1.eventsService.filterEvents();
        if (response !== "Error") {
            return res.json({
                resultCode: 0,
                data: {
                    events: response
                }
            });
        }
        return res.sendStatus(statusCodes_1.statusCodes.INTERNAL_SERVER_ERROR_500);
    }));
    eventsRouter.post("/", yearValidator_1.startYearBodyValidator, yearValidator_1.endYearBodyValidator, monthValidator_1.startMonthBodyValidator, monthValidator_1.endMonthBodyValidator, dayValidator_1.startDayBodyValidator, dayValidator_1.endDayBodyValidator, startEndValidator_1.startEndValidator, errorsCollector_1.errorsCollector, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield eventsService_1.eventsService.createEvent(req.body.eventList, req.body.eventName, req.body.start, req.body.end);
        if (response !== "Error")
            return res.json({
                resultCode: 0,
                data: { event: response }
            });
        else
            return res.status(statusCodes_1.statusCodes.INTERNAL_SERVER_ERROR_500).json({
                resultCode: 1,
                data: {}
            });
    }));
    eventsRouter.put("/", yearValidator_1.startYearBodyValidator, yearValidator_1.endYearBodyValidator, monthValidator_1.startMonthBodyValidator, monthValidator_1.endMonthBodyValidator, dayValidator_1.startDayBodyValidator, dayValidator_1.endDayBodyValidator, startEndValidator_1.startEndValidator, errorsCollector_1.errorsCollector, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield eventsService_1.eventsService.updateEvent(req.body._id, req.body.eventList, req.body.eventName, req.body.start, req.body.end);
        if (response !== "Error") {
            return res.json({
                resultCode: 0,
                data: {
                    event: response
                }
            });
        }
        else
            return res.sendStatus(statusCodes_1.statusCodes.INTERNAL_SERVER_ERROR_500);
    }));
    eventsRouter.delete("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield eventsService_1.eventsService.deleteEvent(req.body._id);
        if (response !== "Error")
            return res.json({
                resultCode: 0,
                data: {}
            });
        else
            return res.sendStatus(statusCodes_1.statusCodes.INTERNAL_SERVER_ERROR_500);
    }));
    return eventsRouter;
};
exports.getEventsRouter = getEventsRouter;
