import express, { Request, Response } from "express"
import { languageQueryValidator } from "./validators/languageValidator"
import { errorsCollector } from "./validators/errorsCollector"
import { RequestWithQuery } from "../models/requestTypes"
import { GetMonthsQueryModel } from "../models/inputModels/getMonthsQueryModel"
import { MonthsViewModel } from "../models/viewModels/monthsViewModel"
import { statusCodes } from "../statusCodes"
import { weekDaysViewModel } from "../models/viewModels/weekDaysViewModel"
import { getWeekDaysQueryModel } from "../models/inputModels/getWeekDaysQueryModel"
import { GetNavigationTitlesQueryModel } from "../models/inputModels/getNavigationTitlesQueryModel"
import { NavigationTitlesViewModel } from "../models/viewModels/navigationTitlesViewModel"
import { languagesQueryRepository } from "../repositories/queryRepositiories/languagesQueryRepository"
import { NavigationTitlesLanguageType } from "../repositories/types"
import { GetEventListColorsQueryModel } from "../models/inputModels/getEventListColorNamesQueryModel"
import { EventListColorNamesViewModel } from "../models/viewModels/eventListColorNamesViewModel"

export const getLanguagesRouter = () => {
    const languagesRouter = express.Router()
    languagesRouter.get("/months", languageQueryValidator, errorsCollector, async(req: RequestWithQuery<GetMonthsQueryModel>, res: Response<MonthsViewModel>) => {
        const months: Array<string> | "Error" | "NotFound" = await languagesQueryRepository.findMonths(req.query.lang)
        if(months !== "Error"){
            return res.json({resultCode: 0, data: {months: months}})
        }
        return res.status(statusCodes.INTERNAL_SERVER_ERROR_500).json({
            resultCode: 1,
            data: {}})
    })
    languagesRouter.get("/weekdays", languageQueryValidator, errorsCollector, async(req: RequestWithQuery<getWeekDaysQueryModel>, res: Response<weekDaysViewModel>) => {
        const weekDays: Array<string> | "Error" | "NotFound" = await languagesQueryRepository.findWeekDays(req.query.lang)
        if(weekDays !== "Error")
            return res.json({data: {weekDays: weekDays}, resultCode: 0})
        return res.status(statusCodes.INTERNAL_SERVER_ERROR_500).json({data: {}, resultCode: 1})
    })































    languagesRouter.get("/navigationTitles", languageQueryValidator, errorsCollector, async(req: RequestWithQuery<GetNavigationTitlesQueryModel>, res: Response<NavigationTitlesViewModel>) => {
        try {
            const response: NavigationTitlesLanguageType | "Error" = await languagesQueryRepository.findNavigationTitles(req.query.lang)
            if(response !== "Error"){
                res.json({
                    resultCode: 0,
                    data: {
                        navigationTitles: response
                    }
                })
            }
        }
        catch(err){
            res.sendStatus(statusCodes.INTERNAL_SERVER_ERROR_500)
        }
    })











































    languagesRouter.get("/eventListColorNames", languageQueryValidator, errorsCollector, async(req: RequestWithQuery<GetEventListColorsQueryModel>, res: Response<EventListColorNamesViewModel>) => {
        const response = await languagesQueryRepository.findEventListColorNames(req.query.lang)
        if(response !== "Error")
            return res.json({
                resultCode: 0,
                data: {eventListColorNames: response}
            })
        else return res.sendStatus(statusCodes.INTERNAL_SERVER_ERROR_500)
    })

    return languagesRouter
} 