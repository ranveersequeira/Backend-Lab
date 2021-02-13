const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const fs = require('fs')
const { json } = require('body-parser')






let app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());





// app.use((req, res, next) => {
//     console.log(req.originalUrl)
//     next()
// })

app.get('/', (req, res) => {
    res.sendFile(__dirname , '../public/index.html')
})

app.post('/form', (req, res) => {
    let data = req.body.email

    fs.appendFileSync('email.json', `${data}\n`, (err) => {
        if(err) console.log(err)
    })
    res.send("Thanks")
    
})


app.get('/formsubmissions', (req, res) => {
    try {
        const data = fs.readFileSync('./email.json', 'utf8')

    res.send(data)

    } catch (err) {
        console.error(err)
    }

    

})



app.use(express.static(path.join(__dirname , '../public')))



app.listen(3000)