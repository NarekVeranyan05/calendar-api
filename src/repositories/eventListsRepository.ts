import { client } from "./db";
import { EventListType } from "./types";

export const eventListsRepository = {
    createEventList: async(eventList: EventListType): Promise<EventListType | "Error"> => {
        try {
            client.db("calendar").collection("eventLists").insertOne(eventList)
            return eventList
        } catch(err){
            return "Error"
        }
    }
}