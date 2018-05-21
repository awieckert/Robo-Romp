const data = require('../javascripts/data.js');
const dom = require('../javascripts/dom.js');

let playerSelect = 1;
let playerTurn = 1;

// try mouseover for the hide player event not mouseenter

$('#player1').mouseover(function () {
  $(this).fadeOut();
}).mouseleave(function () {
  $(this).fadeIn();
});

const addStartFightEvent = () => {
  $('#start-fight').on('click', randomizeStart);
};

const randomizeStart = () => {
  const playerToStart = Math.floor((Math.random() * 2) + 1);
  if (playerToStart === 1) {
    $('#attack1').prop('disabled', false);
    $('#attack2').prop('disabled', true);
    playerTurn = playerToStart;
  } else if (playerToStart === 2) {
    $('#attack1').prop('disabled', true);
    $('#attack2').prop('disabled', false);
    playerTurn = playerToStart;
  }
};

const addAttackEvent = () => {
  $('body').on('click', '.attack', playerAttack);
};

const playerAttack = (e) => {
  const player1 = data.getPlayer1Bot();
  const player2 = data.getPlayer2Bot();
  // const attackingPlayer = $(e.target).closest('.robot').prop('id');
  switch (playerTurn) {
    case 1:
      $('#attack1').prop('disabled', true);
      $('#attack2').prop('disabled', false);
      const player1Attack = player1.swing();
      const damageDealt = (player1Attack - player2.armor);
      player2.health = (player2.health - damageDealt);
      data.setPlayer2Bot(player2);
      dom.buildFighter2(player2);
      if (player2.health <= 0) {
        dom.printWinner(player1);
      }
      console.log('player1 dmg: ', damageDealt);
      playerTurn = 2;
      break;
    case 2:
      $('#attack1').prop('disabled', false);
      $('#attack2').prop('disabled', true);
      const player2Attack = player2.swing();
      const damageDealt2 = (player2Attack - player1.armor);
      player1.health = (player1.health - damageDealt2);
      data.setPlayer1Bot(player1);
      dom.buildFighter1(player1);
      if (player1.health <= 0) {
        dom.printWinner(player2);
      }
      console.log('Player2 Dmg: ', damageDealt2);
      playerTurn = 1;
      break;
  }
};

const addRobotSelectEvent = () => {
  $('.robots').on('click', selectRobot);
};

const selectRobot = (e) => {
  const roboTarget = $(e.target).closest('.thumbnail');
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
  addAttackEvent,
  addStartFightEvent,
};
