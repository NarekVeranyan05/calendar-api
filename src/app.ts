import express from "express";
import { getLanguagesRouter } from "./routes/languagesRouter";
import { getSearchFormRouter } from "./routes/searchFormRouter";
import { getEventsRouter } from "./routes/eventsRouter";
import { getEventListsRouter } from "./routes/eventListsRouter";

export const app = express()
export const port = process.env.PORT || 5001

app.use(express.json())
var cors = require('cors');
app.use(cors({origin: true, credentials: true}));

app.use("/languages", getLanguagesRouter())
app.use("/searchForm", getSearchFormRouter())
app.use("/events", getEventsRouter())
app.use("/eventLists", getEventListsRouter())