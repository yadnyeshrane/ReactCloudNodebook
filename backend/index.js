const connectMongo=require('./db');

const express = require('express')
connectMongo();
const app = express()
const port = 4000

//Availalbe Routes
// app.use("/api/auth",require("./routes/auth"))
app.use(express.json())
app.use("/api/auth",require("./routes/notes"))
app.get('/', (req, res) => {
  res.send('Hello code with!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})