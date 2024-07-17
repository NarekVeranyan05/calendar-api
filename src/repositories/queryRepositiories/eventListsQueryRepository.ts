import { client } from "../db";
import { EventListType } from "../types";

export const eventListsQueryRepository = {
    findLists: async(): Promise<EventListType[] | "Error"> => {
        try {
            const eventLists: Array<EventListType> = await client.db("calendar").collection<EventListType>("eventLists").find({}).toArray()
            return eventLists
        }
        catch(err){
            return "Error"
        }
    }   
}