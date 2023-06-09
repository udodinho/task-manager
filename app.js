const express = require("express")
const app = express()
const tasks = require("./routes/tasks")
const connectDB = require("./db/connectdb")
require('dotenv').config()
const notFound = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/error-handler")

// Middleware
app.use(express.json())

app.use("/api/v1/tasks", tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

const start = async () => {
    try {
       await connectDB(process.env.MONGO_URI)
       app.listen(port, console.log(`Server started on port ${port}...`))
    } catch (error) {
       console.log(error) 
       
    }
}

start()