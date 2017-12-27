const d2gsi = require('dota2-gsi');
const server = new d2gsi();
const getTalents = require('./utilities/heroTalents');

let heroTalents = [];
let hasHero = false;
let heroName = '';
let displayTalents = false;

server.events.on('newclient', function(client) {

  client.on('player:activity', function(activity) {
    if (activity == 'playing') {
      heroTalents = [];
      hasHero = false;
    }
  });

  client.on('hero:level', function(level) {
    if (!displayTalents && level > 0) {
      displayTalents = true;
      console.log("displaying talents");
    }
  });

  client.on('newdata', function (rawdata) {
    if (rawdata.hero && rawdata.hero.name && !hasHero) {
      hasHero = true;
      heroName = rawdata.hero.name;
      heroTalents = getTalents(heroName);
      console.log("hero talents", heroTalents);
    }
    else if (displayTalents && (!rawdata.hero || !rawdata.hero.name)) {
      hasHero = false;
      displayTalents = false;
      console.log("stop displaying talents");
    }
  });

});
