export type StartEndType = {
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number
}

export type PostEventBodyModel = {
    eventList: string,
    eventName: string,
    start: StartEndType
    end: StartEndType
}