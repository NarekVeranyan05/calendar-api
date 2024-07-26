import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { statusCodes } from "../../statusCodes";
import { MonthsViewModel } from "../../models/viewModels/monthsViewModel";

export const errorsCollector = (req: Request, res: Response<MonthsViewModel>, next: NextFunction) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      return next()
    }
    return res.status(statusCodes.BAD_REQUEST_400).json({ 
      resultCode: 1,
      messages: result.array(),
      data: {}
    });
}