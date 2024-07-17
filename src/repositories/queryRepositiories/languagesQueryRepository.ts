import { NavigationTitlesViewModel } from "../../models/viewModels/navigationTitlesViewModel"
import { client } from "../db"
import { EventListColorNamesType, MonthsType, NavigationTitlesLanguageType, NavigationTitlesType, WeekDaysType, EventListColorNamesLanguageType } from "../types"

export const languagesQueryRepository = {
    async findMonths(lang: "ru" | "fr" | "en"): Promise<Array<string> | "Error">{
        try {
            const monthsObject: MonthsType | null = await client.db('calendar').collection<MonthsType>("languages").findOne({"months": {$exists: true}})
            if(monthsObject)
                return monthsObject.months[lang]
            return "Error"
        } catch(err) {return "Error"}
    },
    async findWeekDays(lang: "en" | "fr" | "ru"): Promise<Array<string> |"Error">{
        try{
            const weekDaysObject: WeekDaysType | null = await client.db("calendar").collection<WeekDaysType>("languages").findOne({
                "weekDays": {$exists: true}
            })
            if(weekDaysObject) return weekDaysObject.weekDays[lang]
            return "Error"
        } catch(err){
            return "Error"
        }
    },
    async findNavigationTitles(lang: "en" | "fr" | "ru"): Promise<NavigationTitlesLanguageType | "Error">{
        try {
            const navigationTitlesType: {navigationTitles: NavigationTitlesType} | null = await client.db("calendar").collection<{navigationTitles: NavigationTitlesType}>("languages").findOne({navigationTitles: {$exists: true}})
            if(navigationTitlesType){
                return navigationTitlesType.navigationTitles[lang]
            }
            else return "Error"
        }
        catch(err) {
            return "Error"
        }
    },
    async findEventListColorNames(lang: "en" | "fr" | "ru"): Promise<EventListColorNamesType | "Error">{
        try {
            const eventListColorNamesObject: EventListColorNamesLanguageType | null = await client.db("calendar").collection<EventListColorNamesLanguageType>("languages").findOne({"eventListColorNames": {$exists: true}})
            if(eventListColorNamesObject)
                return eventListColorNamesObject.eventListColorNames[lang]
            else return "Error"
        } catch(err) {
            return "Error"
        }
    }
}