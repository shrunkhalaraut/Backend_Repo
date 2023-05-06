// express :- start a server listening to requests

const express = require('express')

const app = express();

app.get('/', (req, res) => {

    res.send("base url")

})

app.get('/resutant/:id/menu', (req, res) => {

    const { id } = req.params;

    res.send(`Hi Bro ${id}!!!`)

})

app.get('/books', (req, res) => {

    console.log("books url is hit")

    res.send("Hello!!!")

})

app.get('*', (req, res) => {

    res.send("hello you ended on wrong route!!")

})

app.listen(8080, () => {

    console.log('server started!!')

})

/// server :- 8080

//routes :- '/', '/home', '/books'