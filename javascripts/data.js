const atvBots = [];
const flyBots = [];
const rogueBots = [];
let player1Bot = [];
let player2Bot = [];

const getAtvBots = () => {
  return atvBots;
};

const getFlyBots = () => {
  return flyBots;
};

const getRogueBots = () => {
  return rogueBots;
};

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
  atvBots.push(bot);
};

const getAtvBot = (botName) => {
  for (let i = 0; i < atvBots.length; i++) {
    if (atvBots[i].name === botName) {
      return atvBots[i];
    }
  }
};

const setFlyBots = (bot) => {
  flyBots.push(bot);
};

const getFlyBot = (botName) => {
  flyBots.forEach((item) => {
    if (item.name === botName) {
      return item;
    }
  });
};

const setRogueBots = (bot) => {
  rogueBots.push(bot);
};

const getRogueBot = (botName) => {
  rogueBots.forEach((item) => {
    if (item.name === botName) {
      return item;
    }
  });
};

module.exports = {
  setAtvBots,
  setFlyBots,
  setRogueBots,
  setPlayer1Bot,
  setPlayer2Bot,
  getAtvBot,
  getFlyBot,
  getRogueBot,
  getPlayer1Bot,
  getPlayer2Bot,
  getAtvBots,
  getFlyBots,
  getRogueBots,
};
