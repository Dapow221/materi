const express = require('express')
const app = express()
const path = require('path')

const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'Images')
    },
    filename: (req, file, callback) => {
        console.log(file)
        callback(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage})

app.set("view engine", "ejs")
app.get('/upload', (req, res) => {
    res.render('upload')
})

app.post('/upload', upload.single("image"), (req, res) => {
    res.send('image uploaded')
})

app.listen(3000)
console.log("is the server running");