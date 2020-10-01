import express from 'express'
const app = express()
import { html } from './html.js'

const IP_LOOPBACK = 'localhost'
const IP_LOCAL = '192.168.1.126'
const PORT = 7777

//Add a middleware, /sendMessagewhich will apply to all the routes
//and which will take care of sending the response message to the user.
//There will be changes to apply to the routes you wrote earlier, so that they can handle this middleware.

//Message Middleware
app.use('/send_message', function (req, res, next) {
    res.send()
    next()
})

//html middleware
app.use('/wrapWithHtml', html, (req, res, next) => {
    next()
})

//' Express exercises part 2 ' For this you will need to create a route that manages the path /

app.get('/send_message/home', (req, res) => {
    res.send('Express exercises part 2')
})

//Add a route /get_current_time that will return the date of the server on which running to the app.js is user

app.get('/send_message/get_current_time', (req, res) => {
    const date = Date()
    res.send(`${date}`)
})

// Add a route /how_pass_data that returns a message to the user that explains
//how we pass data from one handler / middleware to another on express

app.get('/send_message/how_pass_data', (req, res) => {
    res.send('Handled with app.use')
})

// start the server
app.listen(PORT, IP_LOCAL, () => {
    console.log(`Example app listening at http://${IP_LOCAL}:${PORT} `)
})
