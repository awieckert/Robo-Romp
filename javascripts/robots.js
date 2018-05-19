const data = require('../javascripts/data.js');

const masterRobot = {
  health: 100,
  armor: 5,
  attack: 10,
  critChance: 9,
  critMulti: 1.5,
  swing: function () {
    const isCritical = Math.floor((Math.random() * 10) + 1);
    if (isCritical > this.critChance) {
      return (this.attack * this.critMulti);
    } else {
      return this.attack;
    }
  },
};

function atvRobots () {
  const avtRobot = Object.create(masterRobot);
  avtRobot.critChance = 8;
  avtRobot.critMulti = 1.35;
  avtRobot.armor = 7;

  const goliathATVBot = Object.create(avtRobot);
  goliathATVBot.name = 'Goliath-ATV';
  goliathATVBot.critMulti = 1;
  goliathATVBot.attack = 11;
  goliathATVBot.health =  Math.floor(Math.random() * (200 - 150) + 150);
  console.log('goliathATV: ', goliathATVBot);
  data.setAtvBots(goliathATVBot);
  const testBot = data.getAtvBot('Goliath-ATV');
  console.log('TestATVBot: ', testBot);

  const merlinATVBot = Object.create(avtRobot);
  merlinATVBot.name = 'Merlin-ATV';
  merlinATVBot.critMulti = 2.0;
  merlinATVBot.attack = 15;
  merlinATVBot.health = Math.floor(Math.random() * (111 - 100) + 100);
  merlinATVBot.armor = 2;
  merlinATVBot.critChance = 6;
  data.setAtvBots(merlinATVBot);
};

const flyBots = () => {
  const gryphonFlyBot = Object.create(masterRobot);
  gryphonFlyBot.name = 'Gryphon';
  gryphonFlyBot.critMulti = 1.6;
  gryphonFlyBot.attack = 12;
  gryphonFlyBot.armor = 5;
  gryphonFlyBot.health = Math.floor(Math.random() * (141 - 120) + 120);
  gryphonFlyBot.critChance = 8;

  const stingerFlyBot = Object.create(masterRobot);
  stingerFlyBot.name = 'Stinger';
  stingerFlyBot.attack = 13;
  stingerFlyBot.critChance = 7;
  stingerFlyBot.armor = 4;
  stingerFlyBot.health = Math.floor(Math.random() * (121 - 110) + 110);

  data.setFlyBots(gryphonFlyBot);
  data.setFlyBots(stingerFlyBot);
};

const rougeBots = () => {
  const rogueBot = Object.create(masterRobot);
  rogueBot.critChance = 4;
  rogueBot.critMulti = 2.2;
  rogueBot.attack = 8;
  rogueBot.armor = 3;

  const combatRogue = Object.create(rogueBot);
  combatRogue.name = 'Combat-Rogue';
  combatRogue.attack = 9;
  combatRogue.critChance = 5;
  combatRogue.critMulti = 2;
  combatRogue.health = Math.floor(Math.random() * (131 - 110) + 110);

  const

};

module.exports = {
  atvRobots,
};
