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
exports.eventsService = void 0;
const eventsRepository_1 = require("../repositories/eventsRepository");
const eventsQueryRepository_1 = require("../repositories/queryRepositiories/eventsQueryRepository");
exports.eventsService = {
    filterEvents: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            return yield eventsQueryRepository_1.eventsQueryRepository.filterEvents();
        }
        catch (err) {
            return "Error";
        }
    }),
    findEvents: (year, month, day) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            return yield eventsQueryRepository_1.eventsQueryRepository.findEvents(year, month, day);
        }
        catch (err) {
            return "Error";
        }
    }),
    createEvent: (eventList, eventName, start, end) => __awaiter(void 0, void 0, void 0, function* () {
        const newEvent = {
            eventName: eventName,
            eventList: eventList,
            start: {
                year: start.year,
                month: start.month,
                day: start.day,
                hour: start.hour,
                minute: start.minute
            },
            end: {
                year: end.year,
                month: end.month,
                day: end.day,
                hour: end.hour,
                minute: end.minute
            }
        };
        try {
            return yield eventsRepository_1.eventsRepository.createEvent(newEvent);
        }
        catch (err) {
            return "Error";
        }
    }),
    updateEvent: (_id, eventList, eventName, start, end) => __awaiter(void 0, void 0, void 0, function* () {
        const editedEvent = {
            eventName: eventName,
            eventList: eventList,
            start: {
                year: start.year,
                month: start.month,
                day: start.day,
                hour: start.hour,
                minute: start.minute
            },
            end: {
                year: end.year,
                month: end.month,
                day: end.day,
                hour: end.hour,
                minute: end.minute
            }
        };
        try {
            return yield eventsRepository_1.eventsRepository.updateEvent(_id, editedEvent);
        }
        catch (err) {
            return "Error";
        }
    }),
    deleteEvent: (_id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            return yield eventsRepository_1.eventsRepository.deleteEvent(_id);
        }
        catch (err) {
            return "Error";
        }
    })
};
