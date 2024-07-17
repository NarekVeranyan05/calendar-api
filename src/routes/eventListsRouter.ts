import { Request, Response, Router } from "express";
import { client } from "../repositories/db";
import { statusCodes } from "../statusCodes";
import { EventListType } from "../repositories/types";
import { eventListsQueryRepository } from "../repositories/queryRepositiories/eventListsQueryRepository";
import { EventListsViewModel } from "../models/viewModels/eventListsViewModel";
import { RequestWithBody } from "../models/requestTypes";
import { postEventListBodyModel } from "../models/inputModels/postEventListBodyModel";
import { eventListsService } from "../domain/eventListsService";
import { EventListViewModel } from "../models/viewModels/eventListViewModel";

export const getEventListsRouter = () => {
    const eventListsRouter = Router()
    eventListsRouter.get("/", async(req: Request, res: Response<EventListsViewModel>) => {
        const response: Array<EventListType> | "Error" = await eventListsQueryRepository.findLists()
        if(response !== "Error")
            return res.json({
                resultCode: 0,
                data: {
                    eventLists: response
                }
            })
        return res.sendStatus(statusCodes.INTERNAL_SERVER_ERROR_500)
    })
    eventListsRouter.post("/", async(req: RequestWithBody<postEventListBodyModel>, res: Response<EventListViewModel>) => {
        const response = await eventListsService.createEventList(req.body.eventList, req.body.accentColor)
        if(response !== "Error")
            return res.json({
                resultCode: 0,
                data: {
                    eventList: response
                }
            })
        else return res.sendStatus(statusCodes.INTERNAL_SERVER_ERROR_500)
    })
    return eventListsRouter
} 
