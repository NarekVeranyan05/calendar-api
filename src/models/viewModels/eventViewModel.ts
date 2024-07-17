import { EventType } from "../../repositories/types";
import { GeneralViewModel } from "./generalViewModel";

export type EventViewModel = GeneralViewModel<{event: EventType}>