const app = require("express")()
const cors = require("cors")
const bodyParser = require("express").json
const users = require("./routes/userRouter")

app.use(cors())
app.use(bodyParser())
app.use(users)

module.exports = app