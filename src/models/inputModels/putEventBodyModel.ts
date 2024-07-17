export type StartEndType = {
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number
}

export type PutEventBodyModel = {
    _id: string
    eventList: string,
    eventName: string,
    start: StartEndType
    end: StartEndType
}