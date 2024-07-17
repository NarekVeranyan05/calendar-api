import { StartEndType } from "../models/inputModels/postEventBodyModel"
import { eventsRepository } from "../repositories/eventsRepository"
import { eventsQueryRepository } from "../repositories/queryRepositiories/eventsQueryRepository"
import { EventType } from "../repositories/types"

export const eventsService = {
    filterEvents: async(): Promise<Array<EventType> | "Error"> => {
        try {
            return await eventsQueryRepository.filterEvents()
        } catch(err){
            return "Error"
        }
    },
    findEvents: async(year?: string, month?: string, day?: string): Promise<Array<EventType> | "Error"> => {
        try {
            return await eventsQueryRepository.findEvents(year, month, day)
        } catch(err){
            return "Error"
        }
    },
    createEvent: async(eventList: string, eventName: string, start: StartEndType, end: StartEndType): Promise<EventType | "Error"> => {
        const newEvent: EventType = {
            eventName: eventName,
            eventList: eventList,
            start: {
                year: start.year,
                month: start.month,
                day: start.day,
                hour: start.hour,
                minute: start.minute
            },
            end: {
                year: end.year,
                month: end.month,
                day: end.day,
                hour: end.hour,
                minute: end.minute
            }
        }
        try {
            return await eventsRepository.createEvent(newEvent)
        } catch(err){
            return "Error"
        }
    },
    updateEvent: async(_id: string, eventList: string, eventName: string, start: StartEndType, end: StartEndType): Promise<EventType | "Error"> =>  {
        const editedEvent: EventType = {
            eventName: eventName,
            eventList: eventList,
            start: {
                year: start.year,
                month: start.month,
                day: start.day,
                hour: start.hour,
                minute: start.minute
            },
            end: {
                year: end.year,
                month: end.month,
                day: end.day,
                hour: end.hour,
                minute: end.minute
            }
        }
        try {
            return await eventsRepository.updateEvent(_id, editedEvent)
        } catch(err){
            return "Error"
        }
    },
    deleteEvent: async(_id: string): Promise<{deletionSuccess: 0} | "Error"> => {
        try {
            return await eventsRepository.deleteEvent(_id)
        } catch(err){
            return "Error"
        }
    }
}