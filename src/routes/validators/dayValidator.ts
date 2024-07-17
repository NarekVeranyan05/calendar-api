import { body, param, query } from "express-validator";

export const dayQueryValidator = query("day")
    .optional({ checkFalsy : true })
    .isNumeric().withMessage("entity is not a number")
    .isInt({min: 0, max: 31}).withMessage("entity is not an integer between 0 and 31")

export const dayParamValidator = param("day")
    .isNumeric().withMessage("entity is not a number")
    .isInt({min: 0, max: 31}).withMessage("entity is not an integer between 0 and 31")

export const dayBodyValidator = body("dayOfTheMonth")
    .optional({ checkFalsy : true })
    .isNumeric().withMessage("entity is not a number")
    .isInt({min: 0, max: 31}).withMessage("entity is not an integer between 0 and 31")


export const startDayBodyValidator = body("start.day")
    .isNumeric().withMessage("entity is not a number")
    .isInt({min: 0, max: 31}).withMessage("entity is not an integer between 0 and 31")

export const endDayBodyValidator = body("end.day")
    .isNumeric().withMessage("entity is not a number")
    .isInt({min: 0, max: 31}).withMessage("entity is not an integer between 0 and 31")
