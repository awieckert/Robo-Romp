// const data = require('./data.js');

const avtBots = [];
// let flyBots = [];
// let rogueBots = [];
let player1Bot = [];
let player2Bot = [];

const setPlayer1Bot = (bot) => {
  player1Bot = bot;
};

const getPlayer1Bot = () => {
  return player1Bot;
};

const setPlayer2Bot = (bot) => {
  player2Bot = bot;
};

const getPlayer2Bot = () => {
  return player2Bot;
};

const setAtvBots = (bot) => {
  avtBots.push(bot);
};

const getAtvBot = (botName) => {
  for (let i = 0; i < avtBots.length; i++) {
    if (avtBots[i].name === botName) {
      return avtBots[i];
    }
  }
};

// const setFlyBots = (bot) => {
//   flyBots = bot;
// };

// const getFlyBot = (botName) => {
//   flyBots.forEach((item) => {
//     if (item.name === botName) {
//       return item;
//     }
//   });
// };

// const setRogueBots = (bot) => {
//   rogueBots = bot;
// };

// const getRogueBot = (botName) => {
//   rogueBots.forEach((item) => {
//     if (item.name === botName) {
//       return item;
//     }
//   });
// };

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
  setAtvBots(goliathATVBot);
};

atvRobots();

const testBot = getAtvBot('Goliath-ATV');
console.log('TestATVBot: ', testBot);

console.log('Master Robot: ', masterRobot.swing());

module.export = {
  setAtvBots,
  // setFlyBots,
  // setRogueBots,
  setPlayer1Bot,
  setPlayer2Bot,
  getAtvBot,
  // getFlyBot,
  // getRogueBot,
  getPlayer1Bot,
  getPlayer2Bot,
};
