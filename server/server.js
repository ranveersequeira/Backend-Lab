const path = require('path')
const fs = require('fs')





let rawdata = fs.readFileSync('chrips.json')

let data = JSON.parse(rawdata)

console.log(data)