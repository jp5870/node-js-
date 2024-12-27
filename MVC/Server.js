const express = require('express')
const { default: mongoose } = require('mongoose')
const path = require('path')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 6000

const StudentRouter = require('./Routers/StudentRouter')
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send("run server")
})
app.use('/api/Student', StudentRouter)

// mongoose.connect(mongodb+srv://jaypatel:<db_password>@jay.mhq3t.mongodb.net/``)
// mongoose.connect('mongodb+srv://jaypatel:jay123@crud.mhq3t.mongodb.net/school')
mongoose.connect('mongodb://localhost:27017/school')


.then(() => {
    console.log(("db conected "));
  })
  .catch((err) => {
    console.log(err);
  })
// Jay@5870
app.listen(PORT, () => console.log(`port number is http://localhost:${PORT}`))