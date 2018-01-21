const fs = require('fs')

const folder = './data'

const files = fs.readdirSync(folder)
  .filter(path => path !== 'template.json') // remove the template
  .map(path => JSON.parse(fs.readFileSync(folder + '/' + path)))
  .sort((a,b) => a.close > b.close)

fs.writeFileSync('./public/groupbuys.json', JSON.stringify(files))
