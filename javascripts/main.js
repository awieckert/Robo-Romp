const startApplication = require('../javascripts/dataGate.js');
const backgroundAudio = document.getElementById('background-music');
const firebaseAPI = require('../javascripts/firebaseAPI.js');
$('#start-fight').hide();

$('#battle-dome').on('click', function () {
  $('#battle-dome').hide();
  $('#start-fight').show();
  startApplication();
  backgroundAudio.play();
});

firebaseAPI.callFirebaseConfig();
