const fs = require('fs');
const filePrefix = 'dota_db/';
const npcHeroes = JSON.parse(fs.readFileSync(`${filePrefix}npc_heroes.json`, 'utf8'));

function getTalents(heroName) {
  const hero = npcHeroes.DOTAHeroes[heroName];
  const talentIds = [];

  if (hero) {
    // get talent keys
    for (let i = 10; i < 18; i++) {
      talentIds.push(hero[`Ability${i}`]);
    }
  }
  else {
    throw Error(`Hero: "${hero}" not found in database, try updating your database definition!`);
  }

  const dotaEnglish = JSON.parse(fs.readFileSync(`${filePrefix}dota_english.json`, 'utf8'));
  return talentIds.map(talentId => {
    return dotaEnglish.lang.Tokens[`DOTA_Tooltip_ability_${talentId}`];
  });
}

module.exports = getTalents;