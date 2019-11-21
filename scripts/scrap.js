const fs = require('fs')
const path = require('path')
const getUrls = require('get-urls')

const filesDir = path.join(__dirname, '..', 'files/')

const handleErr = err => console.log(err)

const handleData = data => getUrls(data).forEach(url => console.log(url))

const handleFiles = files => {
    files.forEach(file => {
        fs.readFile(filesDir + file, 'UTF-8', (err, data) => {
            if (err) {
                handleErr(err)
            } else {
                handleData(data)
            }
        })
    })
}

fs.readdir('./files', (err, files) => {
    if (err) {
        handleErr(err)
    } else {
        handleFiles(files)
    }
})
