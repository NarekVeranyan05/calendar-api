import { ValidationError } from "express-validator"

export type GeneralViewModel<T> = {
    resultCode: 0 | 1,
    messages?: Array<ValidationError> 
    data: T | {},
}