const express = require('express')
const app = express();

const PORT = 9000 

app.use(express.json());


app.all('/', (req,res)=>{
    res.status(200).json({
        status: "true",
        message: "Welcome to Swoosh"
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})