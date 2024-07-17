import { ObjectId } from "mongodb"
import { client } from "./db"
import { EventType } from "./types"

export const eventsRepository = {
    createEvent: async(newEvent: EventType): Promise<EventType | "Error"> => {
        try{
            await client.db("calendar").collection("events").insertOne(newEvent)
            return newEvent
        } catch(err) {
            return "Error"
        }
    },
    updateEvent: async(_id: string, event: EventType): Promise<EventType | "Error"> => {
        try{
            debugger
            await client.db("calendar").collection("events").replaceOne({"_id": new ObjectId(_id)}, event)
            return event
        } catch(err) {
            return "Error"
        }
    },
    deleteEvent: async(_id: string): Promise<{deletionSuccess: 0} | "Error"> => {
        try {
            await client.db("calendar").collection("events").deleteOne({_id: new ObjectId(_id)})
            return {deletionSuccess: 0}
        } catch(err){
            return "Error"
        }
    }
}