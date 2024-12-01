const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello, Yash')
})

app.listen(port, () => {
    console.log(`Checking it is running on port ${port}`);
    
})