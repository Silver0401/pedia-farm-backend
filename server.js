// Libraries
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()


// Variables and Inits
const app = express()
let port = process.env.PORT || 5000
app.use(express.json())
app.use(cors())


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/backendTemplate.html")
})


app.get("/thingycoso", (req,res) => {
  res.json("Hello world :U")
})



// Mongo Data Base Connection
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
const dataBase = mongoose.connection
dataBase.on("error", error => console.log(error))
dataBase.once("open", () => console.log("Connected to MongooseDB"))



// Order Routes
const Orders = require("./routes/orders")
app.use("/DataCenter", Orders)

// Meds Routes
const Meds = require("./routes/meds")
app.use("/DataCenter", Meds)



// Support Route
const Support = require("./routes/support")
app.use("/DataCenter", Support)


// Port Listening

app.listen(port, () => console.log(`App server initalized on port ${port}`))
