import { client } from "./db"
import { MonthsType } from "./types"

export const searchFormRepository = {
    checkFormWithYearMonth: async(lang: "en" | "fr" | "ru", monthName: string): Promise<number | "Error"> => {
        try{
            const monthsObject: MonthsType | null = await client.db('calendar').collection<MonthsType>("languages").findOne({"months": {$exists: true}})
            if(monthsObject){
                return monthsObject.months[`${lang}`].indexOf(monthName)
            }
            else return "Error"
        }
        catch(err){
            return "Error"
        }
    },
    checkFormWithYearMonthDay: async(lang: "en" | "fr" | "ru", year: number, monthName: string, dayOfMonth: number): Promise<number | "Error"> => {
        try {
            const monthsObject: MonthsType | null = await client.db('calendar').collection<MonthsType>("languages").findOne({"months": {$exists: true}})
            if(monthsObject){
                console.log(year + ", " + monthName + ", " + dayOfMonth + "\n")
                console.log(new Date(year, monthsObject.months[`${lang}`].indexOf(monthName) + 1, 0).getDate())
                if(dayOfMonth > 0 && dayOfMonth <= new Date(year, monthsObject.months[`${lang}`].indexOf(monthName) + 1, 0).getDate()){
                    return monthsObject.months[`${lang}`].indexOf(monthName)
                }
                else return "Error"
            }
            else return "Error"
        }
        catch(err){
            return "Error"
        }
    }
}