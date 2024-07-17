import { NextFunction } from "express"
import { query, body } from "express-validator"


export const languageBodyValidator = body("lang")
    .exists().withMessage("entity does not exist")
    .isString().withMessage("entity is not a string")
    .isIn(["en", "fr", "ru"]).withMessage("entity is not equal to 'en', 'fr', or 'ru'")


export const languageQueryValidator = query('lang')
    .exists().withMessage("entity does not exist")
    .isString().withMessage("entity is not a string")
    .isIn(['en', 'ru', 'fr']).withMessage("entity should be only: 'en', 'ru', 'fr'")