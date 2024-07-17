import { EventListType } from "../../repositories/types";
import { GeneralViewModel } from "./generalViewModel";

export type EventListsViewModel = GeneralViewModel<{eventLists: EventListType[]}>