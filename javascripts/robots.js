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
  goliathATVBot.attack = 13;
  goliathATVBot.health =  Math.floor(Math.random() * (200 - 150) + 150);
  goliathATVBot.description = 'The Goliath-ATV is a slow monstrosity of a machine. Otherwise known as `Beef Eater` this ATV has loads of health, tough armor and moderate attack damage.';
  goliathATVBot.img = '../img/goliath.jpg';

  const merlinATVBot = Object.create(avtRobot);
  merlinATVBot.name = 'Merlin-ATV';
  merlinATVBot.critMulti = 2.0;
  merlinATVBot.attack = 15;
  merlinATVBot.health = Math.floor(Math.random() * (111 - 100) + 100);
  merlinATVBot.armor = 2;
  merlinATVBot.critChance = 6;
  merlinATVBot.description = `The Merlin-ATV is a glass cannon. Expect high damage output from this ATV, but keep your distance these ATV's have lower health and even lower resistance to attacks.`;
  merlinATVBot.img = '../img/merlin.png';

  data.setAtvBots(goliathATVBot);
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
  gryphonFlyBot.description = `The Gryphon, AKA Mr. Generic. This flying robot is your standard front line soldier. Solid across all stats. Expect steady damage output, moderate armor and substantial health. Slightly higher crit chance than they Goliath-ATV`;
  gryphonFlyBot.img = '../img/gryphon2.jpg';

  const stingerFlyBot = Object.create(masterRobot);
  stingerFlyBot.name = 'Stinger';
  stingerFlyBot.attack = 13;
  stingerFlyBot.critChance = 7;
  stingerFlyBot.armor = 4;
  stingerFlyBot.health = Math.floor(Math.random() * (121 - 110) + 110);
  stingerFlyBot.description =  `The Stinger is an nimble, lightly armored flying bot. Above average base attack and crit chance. These bots have relatively love health but can devastate the battle field`;
  stingerFlyBot.img = '../img/stinger.jpg';

  data.setFlyBots(gryphonFlyBot);
  data.setFlyBots(stingerFlyBot);
};

const rougeBots = () => {
  const rogueBot = Object.create(masterRobot);
  rogueBot.critChance = 4;
  rogueBot.critMulti = 2.2;
  rogueBot.attack = 8;
  rogueBot.armor = 3;
  rogueBot.health = Math.floor(Math.random() * (131 - 110) + 110);

  const combatRogue = Object.create(rogueBot);
  combatRogue.name = 'Combat-Rogue';
  combatRogue.attack = 9;
  combatRogue.critChance = 5;
  combatRogue.critMulti = 2;
  combatRogue.description = `The Combat-Rogue wields two swords. Fast and in your face. Rogue's don't have much armor and the lowest base attack of any bot class but crit regularly. Combat-Rogues have higher base attack than Assassination-Rogues but crit slightly less.`;
  combatRogue.img = '../img/combat-rogue.jpg';

  const assassinationRogue = Object.create(rogueBot);
  assassinationRogue.name = 'Assassination-Rogue';
  assassinationRogue.critChance = 3;
  assassinationRogue.attack = 7;
  assassinationRogue.description = `The Assassination-Rogue unleashes devistating flurries of attacks with his two daggers. Lowest base attack but highest crit chance and crit multiplier of any bot. Take a chance...it may pay off.`;
  assassinationRogue.img = '../img/assass-rogue.jpg';

  data.setRogueBots(combatRogue);
  data.setRogueBots(assassinationRogue);
};

module.exports = {
  atvRobots,
  flyBots,
  rougeBots,
};
