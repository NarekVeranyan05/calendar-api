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
exports.getEventListsRouter = void 0;
const express_1 = require("express");
const statusCodes_1 = require("../../statusCodes");
const eventListsQueryRepository_1 = require("../../repositories/queryRepositiories/eventListsQueryRepository");
const getEventListsRouter = () => {
    const eventListsRouter = (0, express_1.Router)();
    eventListsRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield eventListsQueryRepository_1.eventListsQueryRepository.findLists();
        if (response !== "Error")
            return res.json({
                resultCode: 0,
                data: {
                    eventLists: response
                }
            });
        return res.sendStatus(statusCodes_1.statusCodes.INTERNAL_SERVER_ERROR_500);
    }));
    return eventListsRouter;
};
exports.getEventListsRouter = getEventListsRouter;
