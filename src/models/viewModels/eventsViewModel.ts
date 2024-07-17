import { EventType } from "../../repositories/types";
import { GeneralViewModel } from "./generalViewModel";

export type EventsViewModel = GeneralViewModel<{events: Array<EventType>}>