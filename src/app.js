//Create an program app.js that uses express.
//This app will need to run on your local ip and port 7777.
//With your browser by connecting in http to your local ip on the port 7777you will have to retrieve the message
//' Express exercises part 2 ' For this you will need to create a route that manages the path /

import express from 'express'
const app = express()

const IP_LOOPBACK = 'localhost'
const IP_LOCAL = '192.168.1.126' // my local ip on my network
const PORT = 7777

const date = Date()

app.get('/', (req, res) => {
    res.send('Express exercises part 2')
})

//Add a route /get_current_time that will return the date of the server on which running to the app.js is user

app.get('/get_current_time', (req, res) => {
    const date = Date()
    res.send(`${date}`)
})

// start the server
app.listen(PORT, IP_LOCAL, () => {
    console.log(`Example app listening at http://${IP_LOCAL}:${PORT} `)
})
