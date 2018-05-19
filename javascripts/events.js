const data = require('../javascripts/data.js');
const dom = require('../javascripts/dom.js');

let playerSelect = 1;

const addRobotSelectEvent = () => {
  $('.robots').on('click', selectRobot);
};

const selectRobot = (e) => {
  const roboTarget = $(e.target).closest('.robots');
  console.log('robotarget: ', roboTarget);
  const roboTargetId = $(e.target).closest('.robots').prop('id');
  console.log('robotID: ', roboTargetId);
  const playerBot = data.getBot(roboTargetId);
  console.log('playerBot: ', playerBot);
  switch (playerSelect) {
    case 1:
      dom.printPlayer1(playerBot);
      $(roboTarget).addClass('red');
      playerSelect = 2;
      break;
    case 2:
      if (!$(roboTarget).hasClass('red')) {
        dom.printPlayer2(playerBot);
        $(roboTarget).addClass('blue');
        playerSelect = 3;
        break;
      } else {
        break;
      }
    case 3:
      if ($(roboTarget).hasClass('blue')) {
        $('#player2').html('');
        $(roboTarget).removeClass('blue');
        playerSelect = 4;
        break;
      } else {
        break;
      }
    case 4:
      if ($(roboTarget).hasClass('red')) {
        $('#player1').html('');
        $(roboTarget).removeClass('red');
        playerSelect = 1;
        break;
      } else {
        $(roboTarget).addClass('blue');
        dom.printPlayer2(playerBot);
        playerSelect = 3;
      }
  }
};

module.exports = {
  addRobotSelectEvent,
};
