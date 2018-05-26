const startApplication = require('../javascripts/dataGate.js');
const audioFile = `<audio id='background-music' volume="0" autoplay><source src="./audio/Mortal-Kombat-soft.mp3" type="audio/mpeg"/></audio>`;
$('#start-fight').hide();

$('#battle-dome').on('click', function () {
  $('#battle-dome').hide();
  $('#start-fight').show();
  startApplication();
  $('body').prepend(audioFile);
});
