let avtBots = [];
let flyBots = [];
let rogueBots = [];
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
  avtBots = bot;
};

const getAtvBot = (botName) => {
  avtBots.forEach((item) => {
    if (item.name === botName) {
      return item;
    }
  });
};

const setFlyBots = (bot) => {
  flyBots = bot;
};

const getFlyBot = (botName) => {
  flyBots.forEach((item) => {
    if (item.name === botName) {
      return item;
    }
  });
};

const setRogueBots = (bot) => {
  rogueBots = bot;
};

const getRogueBot = (botName) => {
  rogueBots.forEach((item) => {
    if (item.name === botName) {
      return item;
    }
  });
};

module.export = {
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
};
