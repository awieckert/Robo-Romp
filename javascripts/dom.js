const data = require('./data.js');

const printToDom = (divID, stringToPrint) => {
  $(divID).html(stringToPrint);
};

const printAllBots = () => {
  let stringToPrint = '';
  const ATVs = data.getAtvBots();
  const rogues = data.getRogueBots();
  const flyers = data.getFlyBots();
  ATVs.forEach((atv, i) => {
    if (i === 0) {
      stringToPrint +=  `<div id='${atv.name}' class="col-sm-6 col-md-2 robots">`;
    } else {
      stringToPrint +=  `<div id='${atv.name}' class="col-sm-6 col-md-2 robots">`;
    }
    stringToPrint +=  `<div class="thumbnail">`;
    stringToPrint +=  `<img src="${atv.img}" alt="...">`;
    stringToPrint +=  `<div class="caption">`;
    stringToPrint +=    `<h4>${atv.name}</h4>`;
    stringToPrint +=    `<p>${atv.description}</p>`;
    stringToPrint +=  `</div>`;
    stringToPrint += `</div>`;
    stringToPrint += `</div>`;
  });
  rogues.forEach((rogue, i) => {
    if (i === 1) {
      stringToPrint +=  `<div id='${rogue.name}' class="col-sm-6 col-md-2 robots">`;
    } else {
      stringToPrint +=  `<div id='${rogue.name}' class="col-sm-6 col-md-2 robots">`;
    }
    stringToPrint +=  `<div class="thumbnail">`;
    stringToPrint +=  `<img src="${rogue.img}" alt="...">`;
    stringToPrint +=  `<div class="caption">`;
    stringToPrint +=    `<h4>${rogue.name}</h4>`;
    stringToPrint +=    `<p>${rogue.description}</p>`;
    stringToPrint +=  `</div>`;
    stringToPrint += `</div>`;
    stringToPrint += `</div>`;
  });
  flyers.forEach((flyer, i) => {
    stringToPrint +=  `<div id='${flyer.name}' class="col-sm-6 col-md-2 robots">`;
    stringToPrint +=  `<div class="thumbnail">`;
    stringToPrint +=  `<img src="${flyer.img}" alt="...">`;
    stringToPrint +=  `<div class="caption">`;
    stringToPrint +=    `<h4>${flyer.name}</h4>`;
    stringToPrint +=    `<p>${flyer.description}</p>`;
    stringToPrint +=  `</div>`;
    stringToPrint += `</div>`;
    stringToPrint += `</div>`;
  });
  printToDom('#robots-container', stringToPrint);
};

const printPlayer1 = (bot1) => {
  data.setPlayer1Bot(bot1);
  data.setPlayer1MaxHealth(bot1.health);

  let stringToPrint = '';
  stringToPrint +=  `<div class="col-md-12 stats1 behind">`;
  stringToPrint +=  `<div class="thumbnail">`;
  stringToPrint += `<h3>Health: ${bot1.health}</h3>`;
  stringToPrint += `<h3>Armor: ${bot1.armor}</h3>`;
  stringToPrint += `<h3>Attack: ${bot1.attack}</h3>`;
  stringToPrint += `<h3>Crit Chance: ${bot1.critChance}</h3>`;
  stringToPrint += `<h3>Crit Multiplier: ${bot1.critMulti}</h3>`;
  stringToPrint += `</div>`;
  stringToPrint += `</div>`;

  stringToPrint +=  `<div id='${bot1.name}' class="col-md-12 robot">`;
  stringToPrint +=  `<div class="thumbnail">`;
  stringToPrint +=  `<img src="${bot1.img}" alt="...">`;
  stringToPrint +=  `<div class="caption">`;
  stringToPrint +=    `<h4>${bot1.name}</h4>`;
  stringToPrint +=    `<button id='attack1' class='btn alert-danger attack' disabled>Attack!</button>`;
  stringToPrint +=  `</div>`;
  stringToPrint += `</div>`;
  stringToPrint += `</div>`;

  printToDom('#player1', stringToPrint);
  buildFighter1(bot1);
};

const printPlayer2 = (bot2) => {
  data.setPlayer2Bot(bot2);
  data.setPlayer2MaxHealth(bot2.health);
  let stringToPrint = '';
  stringToPrint +=  `<div class="col-md-12 stats2 behind">`;
  stringToPrint +=  `<div class="thumbnail">`;
  stringToPrint += `<h3>Health: ${bot2.health}</h3>`;
  stringToPrint += `<h3>Armor: ${bot2.armor}</h3>`;
  stringToPrint += `<h3>Attack: ${bot2.attack}</h3>`;
  stringToPrint += `<h3>Crit Chance: ${bot2.critChance}</h3>`;
  stringToPrint += `<h3>Crit Multiplier: ${bot2.critMulti}</h3>`;
  stringToPrint += `</div>`;
  stringToPrint += `</div>`;

  stringToPrint +=  `<div id='${bot2.name}' class="col-md-12 robot">`;
  stringToPrint +=  `<div class="thumbnail">`;
  stringToPrint +=  `<img src="${bot2.img}" alt="...">`;
  stringToPrint +=  `<div class="caption">`;
  stringToPrint +=    `<h4>${bot2.name}</h4>`;
  stringToPrint +=    `<button id='attack2' class='btn alert-danger attack' disabled>Attack!</button>`;
  stringToPrint +=  `</div>`;
  stringToPrint += `</div>`;
  stringToPrint += `</div>`;

  printToDom('#player2', stringToPrint);
  buildFighter2(bot2);
};

const buildFighter1 = (bot) => {
  const fighter1MaxHealth = data.getPlayer1MaxHealth();
  const percentHealth = (bot.health / fighter1MaxHealth) * 100;
  let stringToPrint = '';
  stringToPrint += `<h2 class='red-text'>Health ${bot.health.toFixed(1)}</h2>`;
  stringToPrint += `<div class="progress">`;
  stringToPrint += `<div id='health-bar1' class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="${bot.health}" aria-valuemin="0" aria-valuemax="${bot.health}" style="width: ${percentHealth}%;"></div>`;
  stringToPrint += `</div>`;
  printToDom('#fighter1', stringToPrint);
};

const buildFighter2 = (bot) => {
  const fighter2MaxHealth = data.getPlayer2MaxHealth();
  const percentHealth = (bot.health / fighter2MaxHealth) * 100;
  console.log('precentHealth: ', percentHealth);
  let stringToPrint = '';
  stringToPrint += `<h2 class='red-text'>Health ${bot.health.toFixed(1)}</h2>`;
  stringToPrint += `<div class="progress">`;
  stringToPrint += `<div id='health-bar2' class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="${bot.health}" aria-valuemin="0" aria-valuemax="${bot.health}" style="width: ${percentHealth}%;"></div>`;
  stringToPrint += `</div>`;
  printToDom('#fighter2', stringToPrint);
};

const printWinner = (botWinner) => {
  let stringToPrint = '';
  stringToPrint += `<h2 id='winner-div'>${botWinner.name} Wins!</h2>`;
  printToDom('#winner', stringToPrint);
};

module.exports = {
  printAllBots,
  printPlayer1,
  printPlayer2,
  buildFighter1,
  buildFighter2,
  printWinner,
};
