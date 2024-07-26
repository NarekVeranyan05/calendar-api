import { body } from "express-validator";
import { PostEventBodyModel } from "../../models/inputModels/postEventBodyModel";
import dayjs from "dayjs";

export const startEndValidator = body().custom((body: PostEventBodyModel) => {
    const startDateIsValid: boolean = dayjs().set("year", body.start.year).set("month", body.start.month-1).set("day", body.start.day).set("hour", body.start.hour).set("minute", body.start.minute).isValid()
    if(!startDateIsValid) throw new Error('event start date is not a valid date');
    const endDateIsValid: boolean = dayjs().set("year", body.end.year).set("month", body.end.month-1).set("day", body.end.day).set("hour", body.end.hour).set("minute", body.end.minute).isValid()
    if(!endDateIsValid) throw new Error('event end date is not a valid date');
    
    const startDate = dayjs().set("year", body.start.year).set("month", body.start.month-1).set("day", body.start.day).set("hour", body.start.hour).set("minute", body.start.minute)
    const endDate = dayjs().set("year", body.end.year).set("month", body.end.month-1).set("day", body.end.day).set("hour", body.end.hour).set("minute", body.end.minute)
    const isBefore: boolean = startDate.isBefore(dayjs(endDate))
    if(!isBefore) throw new Error('event start date is not before the end date');
    
    return true;
})