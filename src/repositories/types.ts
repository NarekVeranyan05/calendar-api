
export type MonthsType = {
    months: {
        en: Array<string>,
        fr: Array<string>,
        ru: Array<string>
    }
}

export type WeekDaysType = {
    weekDays: {
        en: Array<string>,
        fr: Array<string>,
        ru: Array<string>
    }
}

export type EventType = {
    eventName: string,
    eventList: string,
    start: {
        year: number,
        month: number, //1-12
        day: number,
        hour: number, //0-24
        minute: number
    },
    end: {
        year: number,
        month: number, //1-12
        day: number,
        hour: number, //0-24
        minute: number
    }
}

export type EventListType = {
    eventList: string,
    accentColor: string
}

export type NavigationTitlesLanguageType = {
    viewSwitch: string,
    createEvent: string,
    createList: string
}

export type NavigationTitlesType = {
    en: NavigationTitlesLanguageType
    fr: NavigationTitlesLanguageType
    ru: NavigationTitlesLanguageType
}

type ColorType = {
    name: string,
    colorCode: string
}
export type EventListColorNamesType = {
    red: ColorType,
    blanchedalmond: ColorType,
    blue: ColorType,
    orange: ColorType,
    purple: ColorType
}
export type EventListColorNamesLanguageType = {
    eventListColorNames: {
        en: EventListColorNamesType,
        fr: EventListColorNamesType,
        ru: EventListColorNamesType
    }
}