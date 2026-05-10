const express = require('express')
const app = express()
const database = require('./database.js')

app.set("view engine", "ejs")
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.render("index.ejs", {
        n: 50
    })
})


app.get('/notes', (req, res) => {
    const searchTerm = req.query.searchTerm;
    const notes = database.getNotes(searchTerm)
    res.render("notes.ejs", {
        notes,
    })
})

app.get('/notes/:id', (req, res) => {
    const id = +req.params.id
    const note = database.getNote(id)
    if (!note) {
        res.status(404).render("note404.ejs")
        return
    }
    res.render("note.ejs", {
        note,
    })
})

app.get('/creatNote', (req, res) => {
    res.render("creatNote.ejs")
})

app.post('/notes', (req, res) => {
    const data = req.body
    
    database.addNote(data)
    res.redirect("/notes")
})

app.post("/note/:id/delete", (req, res) => {
    const id = +req.params.id
    
    database.deleteNote(id)
    res.redirect("/notes")
})

app.use(express.static("public"))

app.listen(8080, _ => {
    console.log("listening from port 8080")
})