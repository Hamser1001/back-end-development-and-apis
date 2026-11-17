import express from "express"
import path from "path"
import { fileURLToPath } from "url"
import { inputCleaner, inputValidator } from "./middleware.js"

const app = express()
const port = 3000

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.get("/", (req, res) => {
    res.redirect("/form")
})

app.use(express.static('public'))

app.get("/form", (req, res) => {
    const pathToFile = path.join(__dirname, "public", "index.html")
    res.sendFile(pathToFile)
})

app.post("/submit", inputCleaner, inputValidator, (req, res) => {
    res.send({
        username: req.body.username,
        comment: req.body.comment
    });
})

app.listen(port, () => {
    console.log(`The server running on http://localhost:${port}/`)
})