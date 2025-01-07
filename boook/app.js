const express = require("express");
const app = express();
const cors = require("cors")
const bookRoute = require("./routes/booksRoutes")
require("./connections/conn")

app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/api/v1",bookRoute)


app.listen(3000,()=>{
  console.log("server started successfully");
  
})