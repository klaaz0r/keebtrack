const fs = require('fs');

const groupbuys = './groupbuys';
const vendors = './vendors';

function parseData(folder, name) {
  const files = fs.readdirSync(folder)
    .filter(path => path !== 'template.json') // remove the template
    .map(path => JSON.parse(fs.readFileSync(folder + '/' + path)))
    .sort((a,b) => a.close > b.close);

  fs.writeFileSync(`./public/${name}.json`, JSON.stringify(files));
};

parseData(groupbuys, 'groupbuys');
parseData(vendors, 'vendors');
