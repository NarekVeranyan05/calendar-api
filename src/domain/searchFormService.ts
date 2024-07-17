import { searchFormRepository } from "../repositories/searchFormRepository"

export const searchFormService = {
    checkFormWithYearMonth: async(lang: "en" | "fr" | "ru", monthName: string): Promise<number | "Error"> => {
        try{
            return await searchFormRepository.checkFormWithYearMonth(lang, monthName)
        } catch(err){ return "Error" }
    },
    checkFormWithYearMonthDay: async(lang: "en" | "fr" | "ru", year: number, monthName: string, dayOfMonth: number): Promise<number | "Error"> => {
        try{
            return await searchFormRepository.checkFormWithYearMonthDay(lang, year, monthName, dayOfMonth)
        } catch(err){ return "Error" }
    }
}