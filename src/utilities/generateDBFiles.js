const https = require('https');
const fs = require('fs');

function createFile(fileName, url) {
  const file = fs.createWriteStream(fileName);
  https.get(url, function (response) {
    response.pipe(file);
  });
}

const prefix = 'dota_db/';

function generateDBFiles() {
  createFile(
    `${prefix}npc_abilities.json`,
    'https://raw.githubusercontent.com/dotabuff/d2vpkr/master/dota/scripts/npc/npc_abilities.json',
  );

  createFile(
    `${prefix}npc_heroes.json`,
    'https://raw.githubusercontent.com/dotabuff/d2vpkr/master/dota/scripts/npc/npc_heroes.json',
  );

  createFile(
    `${prefix}dota_english.json`,
    'https://raw.githubusercontent.com/dotabuff/d2vpkr/master/dota/resource/dota_english.json',
  );
}

generateDBFiles();
// module.exports = generateDBFiles;