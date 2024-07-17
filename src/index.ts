import { app, port } from "./app"
import { runDB } from "./repositories/db"

const runApp = async() => {
    await runDB()
    if(process.env.ENV !== "test"){
        app.listen(port, () => {console.log("backend is launched")})
    }
}

runApp()