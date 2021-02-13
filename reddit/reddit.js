const request = require('request')
const fs = require('fs')
const path = require('path')

const dataPath = path.join(__dirname, "./popular.json")

request('https://reddit.com/r/popular.json', (err, res, body) => {
    if (err) console.log(err)


    fs.writeFileSync(dataPath, res.body, err => {
        if(err) console.log(err)


        JSON.parse(body).data.children.forEach(item => {

            fs.appendFileSync(dataPath, item.data.title + '\n')
            fs.appendFileSync(dataPath, item.data.url + '\n')
            fs.appendFileSync(dataPath , item.data.author + '\n')
            
            
        });


    })
})