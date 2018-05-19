const robots = require('../javascripts/robots.js');
const dom = require('../javascripts/dom.js');

const initializeRobots = () => {
  robots.atvRobots();
  robots.flyBots();
  robots.rougeBots();
  dom.printAllBots();
};

module.exports = initializeRobots;
