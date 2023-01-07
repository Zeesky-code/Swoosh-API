const express = require('express')
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')

require('dotenv').config()

const PORT = 9000 

const searchRouter = require('./routes/search.route')


app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json());
app.use(cors());


app.all('/', (req,res)=>{
    res.status(200).json({
        status: "true",
        message: "Welcome to Swoosh"
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})