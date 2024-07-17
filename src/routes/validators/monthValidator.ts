import { body, param, query } from "express-validator";

export const monthQueryValidator = query("month")
    .optional({ checkFalsy : true })
    .isNumeric().withMessage("entity is not a number")
    .isInt({min: 1, max: 12}).withMessage("entity is not an integer between 1 and 12")

export const monthParamValidator = param("month")
    .isNumeric().withMessage("entity is not a number")
    .isInt({min: 1, max: 12}).withMessage("entity is not an integer between 1 and 12")


export const monthBodyValidator = body("month")
    .isNumeric().withMessage("entity is not a number")
    .isInt({min: 1, max: 12}).withMessage("entity is not an integer between 1 and 12")


export const startMonthBodyValidator = body("start.month")
    .isNumeric().withMessage("entity is not a number")
    .isInt({min: 1, max: 12}).withMessage("entity is not an integer between 1 and 12")

export const endMonthBodyValidator = body("end.month")
    .isNumeric().withMessage("entity is not a number")
    .isInt({min: 1, max: 12}).withMessage("entity is not an integer between 1 and 12")