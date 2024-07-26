import express, { Request, Response } from "express"
import { RequestWithBody, RequestWithParams } from "../models/requestTypes"
import { getEventsOfDayParamsModel, getEventsOfMonthParamsModel } from "../models/inputModels/getEventsBodyModel"
import { client } from "../repositories/db"
import { EventType } from "../repositories/types"
import { EventsViewModel } from "../models/viewModels/eventsViewModel"
import { statusCodes } from "../statusCodes"
import { endYearBodyValidator, startYearBodyValidator, yearBodyValidator, yearParamValidator } from "./validators/yearValidator"
import { endMonthBodyValidator, monthBodyValidator, monthParamValidator, monthQueryValidator, startMonthBodyValidator } from "./validators/monthValidator"
import { dayBodyValidator, dayParamValidator, dayQueryValidator, endDayBodyValidator, startDayBodyValidator } from "./validators/dayValidator"
import { eventsService } from "../domain/eventsService"
import { errorsCollector } from "./validators/errorsCollector"
import { PostEventBodyModel } from "../models/inputModels/postEventBodyModel"
import { eventsRepository } from "../repositories/eventsRepository"
import { EventViewModel } from "../models/viewModels/eventViewModel"
import { startEndValidator } from "./validators/startEndValidator"
import { PutEventBodyModel } from "../models/inputModels/putEventBodyModel"
import { DeleteEventBodyModel } from "../models/inputModels/deleteEventBodyModel"
import { GeneralViewModel } from "../models/viewModels/generalViewModel"

export const getEventsRouter = () => {
    const eventsRouter = express.Router()

    eventsRouter.get("/:year/:month/:day", yearParamValidator, monthParamValidator, dayParamValidator, errorsCollector, async(req: RequestWithParams<getEventsOfDayParamsModel>, res: Response<EventsViewModel>) => {
        const events: Array<EventType> | null | "Error" = await eventsService.findEvents(req.params.year, req.params.month, req.params.day)
        if(events !== "Error")
            return res.json({
                resultCode: 0,
                data: {events: [...events]}
            })
        else return res.status(statusCodes.INTERNAL_SERVER_ERROR_500).json({
            resultCode: 1,
            data: {}
        })
    })

    eventsRouter.get("/:year/:month/", yearParamValidator, monthParamValidator, errorsCollector,  async(req: RequestWithParams<getEventsOfMonthParamsModel>, res: Response<EventsViewModel>) => {
        const events: Array<EventType> | null | "Error" = await eventsService.findEvents(req.params.year, req.params.month)
        if(events !== "Error")
            return res.json({
                resultCode: 0,
                data: {events: [...events]}
            })
        else return res.status(statusCodes.INTERNAL_SERVER_ERROR_500).json({
            resultCode: 1,
            data: {}
        })
    })

    eventsRouter.get("/", async(req: Request, res: Response<EventsViewModel>) => {
        const response = await eventsService.filterEvents()
        if(response !== "Error"){
            return res.json({
                resultCode: 0,
                data: {
                    events: response
                }
            })
        }
        return res.sendStatus(statusCodes.INTERNAL_SERVER_ERROR_500)
    })

    eventsRouter.post("/", startYearBodyValidator, endYearBodyValidator, startMonthBodyValidator, endMonthBodyValidator, startDayBodyValidator, endDayBodyValidator, startEndValidator, errorsCollector, async(req: RequestWithBody<PostEventBodyModel>, res: Response<EventViewModel>) => {
        const response: EventType | "Error" = await eventsService.createEvent(req.body.eventList, req.body.eventName, req.body.start, req.body.end) 
        if(response !== "Error")
            return res.json({
                resultCode: 0,
                data: {event: response}    
            })
        else return res.status(statusCodes.INTERNAL_SERVER_ERROR_500).json({
            resultCode: 1,
            data: {}
        })
    })

    eventsRouter.put("/", startYearBodyValidator, endYearBodyValidator, startMonthBodyValidator, endMonthBodyValidator, startDayBodyValidator, endDayBodyValidator, startEndValidator, errorsCollector, async(req: RequestWithBody<PutEventBodyModel>, res: Response<EventViewModel>) => {
        const response: EventType | "Error" = await eventsService.updateEvent(req.body._id, req.body.eventList, req.body.eventName, req.body.start, req.body.end) 
        if(response !== "Error"){
            return res.json({
                resultCode: 0,
                data: {
                    event: response
                }
            })
        }
        else return res.sendStatus(statusCodes.INTERNAL_SERVER_ERROR_500)
    })

    eventsRouter.delete("/", async(req: RequestWithBody<DeleteEventBodyModel>, res: Response<GeneralViewModel<{}>>) => {
        const response = await eventsService.deleteEvent(req.body._id)
        if(response !== "Error")
            return res.json({
                resultCode: 0,
                data: {}
            })
        else return res.sendStatus(statusCodes.INTERNAL_SERVER_ERROR_500)  
    })

    return eventsRouter
}