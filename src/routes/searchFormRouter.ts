import express, { Response } from "express"
import { RequestWithBody } from "../models/requestTypes"
import { postSearchBodyModel } from "../models/inputModels/postSearchBodyModel"
import { searchViewModel } from "../models/viewModels/searchViewModel"
import { languageBodyValidator } from "./validators/languageValidator"
import { monthNameBodyValidator } from "./validators/monthNameValidator"
import { yearBodyValidator } from "./validators/yearValidator"
import { statusCodes } from "../statusCodes"
import { searchFormService } from "../domain/searchFormService"
import { dayBodyValidator } from "./validators/dayValidator"
import { errorsCollector } from "./validators/errorsCollector"

export const getSearchFormRouter = () => {
    const searchFormRouter = express.Router()
    //monthName and dayOfMonth are optional
    searchFormRouter.post("/", yearBodyValidator, monthNameBodyValidator, dayBodyValidator, languageBodyValidator, errorsCollector, async(req: RequestWithBody<postSearchBodyModel>, res: Response<searchViewModel>) => {
        if(!req.body.monthName) {}
        else if(!req.body.dayOfTheMonth){
            const response: number | "Error"  = await searchFormService.checkFormWithYearMonth(req.body.lang, req.body.monthName)
            if(response !== "Error"){
                res.json({
                    resultCode: 0,
                    data: {monthIndex: response}
                })
            }
            else res.sendStatus(statusCodes.INTERNAL_SERVER_ERROR_500)
        }
        else {
            debugger
            const response: number | "Error"  = await searchFormService.checkFormWithYearMonthDay(req.body.lang, req.body.year, req.body.monthName, req.body.dayOfTheMonth)
            if(response !== "Error"){
                res.json({
                    resultCode: 0,
                    data: {monthIndex: response}
                })
            }
            else res.sendStatus(statusCodes.INTERNAL_SERVER_ERROR_500)
        }
    })

    return searchFormRouter
}