import { body, param, query } from "express-validator";

export const yearBodyValidator = body("year")
    .exists().withMessage("entity does not exist")
    .isNumeric().withMessage("entity is not a number")

export const startYearBodyValidator = body("start.year")
    .exists().withMessage("entity does not exist")
    .isNumeric().withMessage("entity is not a number")

export const endYearBodyValidator = body("end.year")
    .exists().withMessage("entity does not exist")
    .isNumeric().withMessage("entity is not a number")

export const yearQueryValidator = query("year")
    .optional({ checkFalsy : true })
    .isNumeric().withMessage("entity is not a number")
    .isInt({min: 0}).withMessage("entity is not an integer greater than 0")

export const yearParamValidator = param("year")
    .isNumeric().withMessage("entity is not a number")
    .isInt({min: 0}).withMessage("entity is not an integer greater than 0")