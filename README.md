# Dota talents twitch extension

The extension plugs into dota game state to retrieve current hero and allows for display of the hero's talents without having to exit the streaming context or ask the streamer to show the talents.

## TODO:
- Make Game state integration installable/runnable
- Installer includes pointing it to dota 2 folder, so gamestate_integration_test.cfg can be inserted there properly
- 

## Requirements for this to work

1. The config file for game-state must be installed in their Dota folder
2. The emitted info from Dota must be caught, this might be possible through the extension.

## Getting started

Run the following in certs folder:

```openssl req -newkey rsa:4096 -days 1001 -nodes -x509 -keyout test.key -out test.crt```

## Resources

Dota database for heroes and abilities:
- [Dotabuff d2vpkr](https://github.com/dotabuff/d2vpkr)

Game state resources:
- [Game state integration docs (CS:GO)](https://developer.valvesoftware.com/wiki/Counter-Strike:_Global_Offensive_Game_State_Integration)
- [Simple GSI example node](https://github.com/JoniSykes/dota-gsi/blob/initRepo/app.js)
- [Dota GSI framework](https://www.npmjs.com/package/dota2-gsi)
- [Dota c# gsi](https://github.com/antonpup/Dota2GSI)

