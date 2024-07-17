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
exports.eventsRepository = void 0;
const mongodb_1 = require("mongodb");
const db_1 = require("./db");
exports.eventsRepository = {
    createEvent: (newEvent) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield db_1.client.db("calendar").collection("events").insertOne(newEvent);
            return newEvent;
        }
        catch (err) {
            return "Error";
        }
    }),
    updateEvent: (_id, event) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            debugger;
            yield db_1.client.db("calendar").collection("events").replaceOne({ "_id": new mongodb_1.ObjectId(_id) }, event);
            return event;
        }
        catch (err) {
            return "Error";
        }
    }),
    deleteEvent: (_id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield db_1.client.db("calendar").collection("events").deleteOne({ _id: new mongodb_1.ObjectId(_id) });
            return { deletionSuccess: 0 };
        }
        catch (err) {
            return "Error";
        }
    })
};
