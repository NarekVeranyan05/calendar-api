import {MongoClient} from "mongodb"

const mongoURI = process.env.MongoURI || "mongodb://127.0.0.1:27017"
export const client = new MongoClient(mongoURI)

export const runDB = async() => {
    try{
        await client.connect()
        await client.db("calendar").command({ping: 1})
    } catch(err){
        console.log("Error")
        client.close()
    }
}