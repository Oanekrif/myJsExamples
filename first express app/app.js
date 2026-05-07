const express = require('express');
// const { userInfo } = require('node:os');
const app = express();
app.use(express.json())

const users = []

app.get('/', (req, res) => res.send('welcome to home'))
app.get('/hello', (req, res) => res.send('Hello There'))

app.get('/users', (req, res) => {
    if (users.length === 0) {
        res.status(404).send('users not found')
        return
    }
    res.status(200).send(users)
})

app.post('/users', (req, res) => {
    const user = req.body;
    const findUser = users.find(x => x.id === user.id)

    if (findUser) {
        res.status(400).send('user alredy exist')
        return
    }
    users.push(req.body)
    res.status(201).send('ceated user')
})

app.listen(3000, _ => console.log("this is from port 3000"))