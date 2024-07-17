"use strict";
// import { client } from "./db"
// import { EventType } from "./types"
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventsQueryRepository = void 0;
// export const eventsRepository = {
//     findEvents: async(year?: string, month?: string, day?: string): Promise<Array<EventType> | "Error"> => {
//         let queries = ''
//         if(year && !month && !day){
//             var query = {
//                 "start.year": {"$lte": year},
//                 "end.year": {"$gte": year}
//             }
//             queries += JSON.stringify(query)
//         }
//         else if(year && month){
//             queries = '{ "$or": ['
//             //event between the years
//             queries += `{"start.year": {"$lt": ${year}}, "end.year": {"$gt": ${year}}},`
//             //event directly in the year
//             queries += `{"start.year": ${year}, "end.year": ${year}, "start.month": {"$lte": ${month}}, "end.month": {"$gte": ${month}}},`
//             //event starts on the same year, ends on different
//             queries += `{"start.year": ${year}, "start.month": {"$lte": ${month}}, "$or": [{"end.year": {"$gt": ${year}}}, {"end.year": ${year}, "end.month": {"$gte": ${month}}}]},`
//             //event ends on the same year, starts on different
//             queries += `{"end.year": ${year}, "end.month": {"$gte": ${month}}, "$or": [{"start.year": {"$lt": ${year}}}, {"start.year": ${year}, "start.month": {"$lte": ${month}}}]},`
//             //event directly in the year and month of the end date
//             queries += `{"end.year": ${year}, "end.month": ${month}},` 
//             //event directly in the year and month of the start date
//             queries += `{"start.year": ${year}, "start.month": ${month}}`
//             queries += ']'
//         }
//         else if(year && month && day){
//             queries = '{ "$or": ['
//             //event between the years
//             queries += `{"start.year": {"$lt": ${year}}, "end.year": {"$gt": ${year}}},`
//             //event directly in the year
//             queries += `{"start.year": ${year}, "end.year": ${year}, "start.month": {"$lte": ${month}}, "end.month": {"$gte": ${month}}},`
//             //event starts on the same year, ends on different
//             queries += `{"start.year": ${year}, "start.month": {"$lte": ${month}}, "$or": [{"end.year": {"$gt": ${year}}}, {"end.year": ${year}, "end.month": {"$gte": ${month}}}]},`
//             //event ends on the same year, starts on different
//             queries += `{"end.year": ${year}, "end.month": {"$gte": ${month}}, "$or": [{"start.year": {"$lt": ${year}}}, {"start.year": ${year}, "start.month": {"$lte": ${month}}}]},`
//             //event directly in the year and month of the end date
//             queries += `{"end.year": ${year}, "end.month": ${month}},` 
//             //event directly in the year and month of the start date
//             queries += `{"start.year": ${year}, "start.month": ${month}}`
//             queries += ']'
//         }
//         if(queries.slice(-1) === ",") queries = queries.substring(0, queries.length-1)
//         queries += '}'
//         try {
//             const events: Array<EventType> | null = await client.db("calendar").collection<EventType>("events").find(JSON.parse(queries)).toArray()
//             return events
//         } catch(err){
//             return "Error"
//         }
//     }
// }
const db_1 = require("../db");
// export const eventsRepository = {
//     findEvents: async(year?: string, month?: string, day?: string): Promise<Array<EventType> | "Error"> => {
//         let queries = '{'
//         if(year){
//             queries += ` \"$or\": [{\"start.year\": ${year}}, {\"end.year\": ${year}}],`
//         }
//         if(month){
//             queries += ` \"$or\": [{\"start.month\": ${month}}, {\"end.month\": ${month}}],`
//         }
//         if(day){
//             queries += ` \"$or\": [{\"start.day\": ${day}}, {\"end.day\": ${day}}],'`
//         }
//         if(queries.slice(-1) === ",") queries = queries.substring(0, queries.length-1)
//         queries += '}'
//         try {
//             let queriesParsed = JSON.parse(queries)
//             const events: Array<EventType> | null = await client.db("calendar").collection<EventType>("events").find(queriesParsed).toArray()
//             return events
//         } catch(err){
//             return "Error"
//         }
//     }
// }
// $or: [
//     {
//         "start.year": {$lt: 2023},
//         "end.year": {$gt: 2023},
//     },
//     {
//         "start.year": 2023,
//         "end.year": 2023,
//         "start.month": {$lte: 12},
//         "end.month": {$gte: 12}
//     },
//     {
//         "start.year": 2023,
//         "start.month": {$lte: 12},
//         $or: [{                
//             "end.year": {$gt: 2023},
//         },
//         {
//             "end.year": 2023,
//             "end.month": {$gte: 12},  
//         }],
//     },
//     {
//         "end.year": 2023,
//         "end.month": {$gte: 12},
//         $or: [{                
//             "start.year": {$lt: 2023},
//         },
//         {
//             "start.year": 2023,
//             "start.month": {$lte: 12},  
//         }],
//     },
//     {
//         "end.year": 2023,
//         "end.month": 12
//     },
//     {
//         "start.year": 2023,
//         "start.month": 12
//     },
// ]
exports.eventsQueryRepository = {
    filterEvents: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const events = db_1.client.db("calendar").collection("events").find({}).sort({}).toArray();
            return events;
        }
        catch (err) {
            return "Error";
        }
    }),
    findEvents: (year, month, day) => __awaiter(void 0, void 0, void 0, function* () {
        let queries = '';
        if (year && !month && !day) {
            var query = {
                "start.year": { "$lte": year },
                "end.year": { "$gte": year }
            };
            queries += JSON.stringify(query);
        }
        else if (year && month) {
            queries = '{"$or": [';
            //1. between two years
            queries += `{"start.year": {"$lt": ${year}}, "end.year": {"$gt": ${year}}},`;
            //2. between two months of the same year
            queries += `{"start.year": ${year}, "end.year": ${year}, "start.month": {"$lt": ${month}}, "end.month": {"$gt": ${month}}},`;
            //3. between month of the same year and next year
            queries += `{"start.year": ${year}, "end.year": {"$gt": ${year}}, "start.month": {"$lt": ${month}}},`;
            //4. between previous year and the month of the same year
            queries += `{"start.year": {"$lt": ${year}}, "end.year": ${year}, "end.month": {"$gt": ${month}}},`;
            //5. event starts this month
            queries += `{"start.year": ${year}, "end.year": {"$lt": ${year}}, "start.month": ${month}},`;
            //6. event ends this month
            queries += `{"start.year": {"$lt": ${year}}, "end.year": ${year}, "end.month": ${month}},`;
            //7. event occurs within the month, from start of the event until the end of month
            queries += `{"start.year": ${year}, "end.year": ${year}, "start.month": ${month}, "end.month": {"$gt": ${month}}},`;
            //8. event occurs within the month, from start of the month until the end of event
            queries += `{"start.year": ${year}, "end.year": ${year}, "start.month": {"$lt": ${month}}, "end.month": ${month}},`;
            //9. event occurs within the month, from start of event until the end of event
            queries += `{"start.year": ${year}, "end.year": ${year}, "start.month": ${month}, "end.month": ${month}}`;
            queries += ']';
            queries += '}';
        }
        else if (year && month && day) {
            queries = '{"$or": [';
            //1. between two years
            queries += `{"start.year": {"$lt": ${year}}, "end.year": {"$gt": ${year}}},`;
            //2. event between the month of the same year and the next year
            queries += `{"start.year": ${year}, "end.year": {"$gt": ${year}}, "start.month": {"$lt": ${month}}},`;
            //3. event between the day of the same month and next year
            queries += `{"start.year": ${year}, "end.year": {"$gt": ${year}}, "start.month": ${month}, "start.day": {"$lt": ${day}}},`;
            //4. event happens the same day, from start hour until the end of day
            queries += `{"start.year": ${year}, "end.year": {"$gt": ${year}}, "start.month": ${month}, "start.day": ${month}},`;
            //5. event bewteen the previous year and the month of the same year
            queries += `{"start.year": {"$lt": ${year}}, "end.year": ${year}, "end.month": {"$gt": ${month}}},`;
            //6. event between the previous year and the day of the same month
            queries += `{"start.year": {"$lt": ${year}}, "end.year": ${year}, "end.month": ${month}, "end.day": {"$gt": ${day}}},`;
            //7. event between the previous yead and happens of the same day of month
            queries += `{"start.year": {"$lt": ${year}}, "end.year": ${year}, "end.month": ${month}, "end.day": ${day}},`;
            //8. event between months of the same year
            queries += `{"start.year": ${year}, "end.year": ${year}, "start.month": {"$lt": ${month}}, "end.month": {"$gt": ${month}}},`;
            //9. event between the day of the same month and next month
            queries += `{"start.year": ${year}, "end.year": ${year}, "start.month": ${month}, "end.month": {"$gt": ${month}}, "start.day": {"$lt": ${day}}},`;
            //10. event happens the same day, from start hour until the end of day
            queries += `{"start.year": ${year}, "end.year": ${year}, "start.month": ${month}, "end.month": {"$gt": ${month}}, "start.day": ${day}},`;
            //11. event happens between month of the same year and the day of the same month
            queries += `{"start.year": ${year}, "end.year": ${year}, "start.month": {"$lt": ${month}}, "end.month": ${month}, "end.day": {"$gt": ${day}}},`;
            //12. event happens between the month of the same year and the same day
            queries += `{"start.year": ${year}, "end.year": ${year}, "start.month": {"$lt": ${month}}, "end.month": ${month}, "end.day": ${day}},`;
            //13. event happens between the days of the same month
            queries += `{"start.year": ${year}, "end.year": ${year}, "start.month": ${month}, "end.month": ${month}, "start.day": {"$lt": ${day}}, "end.day": {"$gt": ${day}}},`;
            //14. event between the same day of the same month and the day of the same month
            queries += `{"start.year": ${year}, "end.year": ${year}, "start.month": ${month}, "end.month": ${month}, "start.day": ${day}, "end.day": {"$gt": ${day}}},`;
            //15. event happens between the day of the same month and the same day of the same month
            queries += `{"start.year": ${year}, "end.year": ${year}, "start.month": ${month}, "end.month": ${month}, "start.day": {"$lt": ${day}}, "end.day": ${day}},`;
            //16. event happens on the same day of the same month
            queries += `{"start.year": ${year}, "end.year": ${year}, "start.month": ${month}, "end.month": ${month}, "start.day": ${day}, "end.day": ${day}}`;
            queries += ']';
            queries += '}';
        }
        if (queries === '')
            queries = '{}';
        try {
            const events = yield db_1.client.db("calendar").collection("events").find(JSON.parse(queries)).toArray();
            return events;
        }
        catch (err) {
            return "Error";
        }
    })
};
