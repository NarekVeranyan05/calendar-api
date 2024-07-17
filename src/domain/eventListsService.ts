import { eventListsRepository } from "../repositories/eventListsRepository"
import { EventListType } from "../repositories/types"

export const eventListsService = {
    createEventList: async(eventList: string, accentColor: string) => {
        const eventListObject: EventListType = {
            eventList: eventList,
            accentColor: accentColor
        }

        return await eventListsRepository.createEventList(eventListObject)
    }
}