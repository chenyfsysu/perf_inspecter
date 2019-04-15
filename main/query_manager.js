const {app, ipcMain} = require("electron")

export class QueryManager {
    constructor() {
        this.HandleQuery()
    }

    HandleQuery() {
        ipcMain.on("query", (event, data) => {

        })

    }
}
