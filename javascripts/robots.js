const data = require('../javascripts/data.js');

const masterRobot = {
  health: 100,
  armor: 5,
  attack: 10,
  critNum: 9,
  critMulti: 1.5,
  swing: function () {
    const isCritical = Math.floor((Math.random() * 10) + 1);
    if (isCritical > this.critNum) {
      return (this.attack * this.critMulti);
    } else {
      return this.attack;
    }
  },
};

function atvRobots () {
  const avtRobot = Object.create(masterRobot);
  avtRobot.critNum = 8;
  avtRobot.critMulti = 1.35;
  avtRobot.armor = 7;

  const goliathATVBot = Object.create(avtRobot);
  goliathATVBot.name = 'Goliath-ATV';
  goliathATVBot.critMulti = 1;
  goliathATVBot.attack = 11;
  goliathATVBot.health =  Math.floor(Math.random() * (161 - 120) + 120);
  console.log('goliathATV: ', goliathATVBot);
  data.setAtvBots(goliathATVBot);
  const testBot = data.getAtvBot('Goliath-ATV');
  console.log('TestATVBot: ', testBot);

  const merlinATVBot = Object.create(avtRobot);
  merlinATVBot.name = 'Merlin-ATV';
  merlinATVBot.critMulti = 2.0;
  merlinATVBot.attack = 12;
  merlinATVBot.health = Math.floor(Math.random() * (111 - 100) + 100);
  merlinATVBot.armor = 2;
  merlinATVBot.critNum = 6;
  data.setAtvBots(merlinATVBot);
};

module.exports = {
  atvRobots,
};
