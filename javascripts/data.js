const avtBots = [];
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
  avtBots.push(bot);
};

const getAtvBot = (botName) => {
  for (let i = 0; i < avtBots.length; i++) {
    if (avtBots[i].name === botName) {
      return avtBots[i];
    }
  }
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
