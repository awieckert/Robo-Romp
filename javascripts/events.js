const data = require('../javascripts/data.js');
const dom = require('../javascripts/dom.js');
const audioHit = document.getElementById('hit1');
const audioHit2 = document.getElementById('hit2');
const audioAttack = document.getElementById('audio-attack');
const fightAudio = document.getElementById('fightAudio');
const player1WinsAudio = document.getElementById('player1-wins');
const player2WinsAudio = document.getElementById('player2-wins');

let playerSelect = 1;
let playerTurn = 1;
let fightStatus = 'Off';

// try mouseover for the hide player event not mouseenter

$('#player1').mouseover(function () {
  if (fightStatus === 'Off') {
    $(this).find('.robot').fadeOut(300, function () {
      $('.stats1').fadeIn(300);
    });
  }
}).mouseleave(function () {
  if (fightStatus === 'Off') {
    $(this).find('.stats1').fadeOut(300, function () {
      $('.robot').fadeIn(300);
    });
  }
});

$('#player2').mouseover(function () {
  if (fightStatus === 'Off') {
    $(this).find('.robot').fadeOut(300, function () {
      $('.stats2').fadeIn(300);
    });
  }
}).mouseleave(function () {
  if (fightStatus === 'Off') {
    $(this).find('.stats2').fadeOut(300, function () {
      $('.robot').fadeIn(300);
    });
  }
});

const addStartFightEvent = () => {
  $('#start-fight').on('click', randomizeStart);
};

const fightingStance = () => {
  $('#player2').addClass('fighting');
  $('#player1').addClass('fighting');
};

const randomizeStart = () => {
  const playerToStart = Math.floor((Math.random() * 2) + 1);
  if (playerToStart === 1) {
    $('#attack1').prop('disabled', false);
    $('#attack2').prop('disabled', true);
    $('body').css('background-image', `url('../img/fightBackground1.jpg')`);
    fightAudio.play();
    $('#robots-container').hide();
    fightingStance();
    playerTurn = playerToStart;
    fightStatus = 'On';
  } else if (playerToStart === 2) {
    $('#attack1').prop('disabled', true);
    $('#attack2').prop('disabled', false);
    $('body').css('background-image', `url('../img/fightBackground2.jpg')`);
    fightAudio.play();
    $('#robots-container').hide();
    fightingStance();
    playerTurn = playerToStart;
    fightStatus = 'On';
  }
};

const addAttackEvent = () => {
  $('body').on('click', '#attack1', playerAttack);
  $('body').on('click', '#attack2', playerAttack);
  $('body').on('keypress', determinePress);
};

const determinePress = (e) => {
  console.log('KeyPress for Attack: ', e);
  if (fightStatus === 'On' && e.which === 48 || e.which === 49) {
    playerAttack();
  } else {
    console.log('Not Fighting Yet');
  }
};

const playerHit = (num) => {
  window.setTimeout(function () { $(`#player${num}`).addClass('animated shake'); }, 230);
  const selectAudio = Math.floor((Math.random() * 2) + 1);
  if (selectAudio === 1) {
    window.setTimeout(function () { audioHit.play(); }, 230);
  } else if (selectAudio === 2) {
    window.setTimeout(function () { audioHit2.play(); }, 230);
  }
};

const removeHit = (num) => {
  window.setTimeout(function () { $(`#player${num}`).removeClass('animated shake'); }, 1000);
};

const attackAnimations1 = () => {
  $('#player2').removeClass('animated slideInRight');
  $('#attack1').prop('disabled', true);
  $('#attack2').prop('disabled', false);
  $('#player1').addClass('animated slideInLeft');
  $('#player2').removeClass('animated slideInRight');
  audioAttack.play();
  playerHit(2);
  removeHit(2);
};

const attackAnimations2 = () => {
  $('#attack1').prop('disabled', false);
  $('#attack2').prop('disabled', true);
  $('#player2').addClass('animated slideInRight');
  $('#player1').removeClass('animated slideInLeft');
  audioAttack.play();
  playerHit(1);
  removeHit(1);
};

const playerAttack = (e) => {
  const player1 = data.getPlayer1Bot();
  const player2 = data.getPlayer2Bot();

  switch (playerTurn) {
    case 1:
      attackAnimations1();
      const player1Attack = player1.swing();
      let damageDealt = (player1Attack - player2.armor);
      damageDealt = damageDealt.toFixed(1);
      player2.health = (player2.health - damageDealt);
      data.setPlayer2Bot(player2);
      dom.buildFighter2(player2);
      $('#attack-dmg').html(`<div><h2 class='wordDamage'>Damage</h2></div></div><div id='damage'><h2 class='dmg-h2'>${damageDealt}</h2></div>`);
      if (player2.health <= 0) {
        dom.printWinner(player1);
        player1WinsAudio.play();
      }
      playerTurn = 2;
      break;
    case 2:
      attackAnimations2();
      const player2Attack = player2.swing();
      let damageDealt2 = (player2Attack - player1.armor);
      damageDealt2 = damageDealt2.toFixed(1);
      player1.health = (player1.health - damageDealt2);
      data.setPlayer1Bot(player1);
      dom.buildFighter1(player1);
      $('#attack-dmg').html(`<div><h2 class='wordDamage'>Damage</h2></div><div id='damage'><h2 class='dmg-h2'>${damageDealt2}</h2></div>`);
      if (player1.health <= 0) {
        dom.printWinner(player2);
        player2WinsAudio.play();
      }
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
