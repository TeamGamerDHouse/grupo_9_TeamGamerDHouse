const path = require('path')
const fs = require ('fs')
const jsonPath = path.join(__dirname, '../database/user.json');

const json = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));



