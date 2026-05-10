import express from 'express'
import bcrypt from 'bcrypt'

const app = express()
app.use(express.json())

const users = []

app.get('/sign', (req, res) => {
    res.send(users)
})
app.post('/sign', async (req, res) => {
    const { id, username, password } = req.body
    console.log(password)
    const hash = await bcrypt.hash(password, 13)
    users.push({
        id,
        username,
        password: hash
    })

    res.status(201).send('signup successful')
})

app.post('/login', async (req, res) => {
    const { id, username, password } = req.body
    const user = users.find(u => u.username === username)
    if (!user) {
        res.status(404).send("wrong username")
        return
    }
    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid) {
        res.status(400).send("wrong username")
        return
    }
    res.send('login successful')
})

app.listen(3000, _ => console.log('start on port: 3000'))