const robots = require('../javascripts/robots.js');
const dom = require('../javascripts/dom.js');
const events = require('../javascripts/events.js');
const data = require('../javascripts/data.js');

const initializeRobots = () => {
  robots.atvRobots();
  robots.flyBots();
  robots.rougeBots();
  dom.printAllBots();
  events.addRobotSelectEvent();
  data.setAllBotsArray();
  events.addAttackEvent();
  events.addStartFightEvent();
};

module.exports = initializeRobots;
