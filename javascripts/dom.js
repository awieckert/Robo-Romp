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
  let stringToPrint = '';
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
  let stringToPrint = '';
  stringToPrint +=  `<div id='stats' class="col-md-12 robot behind">`;
  stringToPrint +=  `<div class="thumbnail">`;
  stringToPrint +=  `<img src="" alt="...">`;
  stringToPrint +=  `<div class="caption">`;
  stringToPrint +=    `<h4>Test</h4>`;
  stringToPrint +=  `</div>`;
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
  let stringToPrint = '';
  stringToPrint += `<p>Health: ${bot.health}</p>`;
  stringToPrint += `<p>Armor: ${bot.armor}</p>`;
  stringToPrint += `<p>Attack: ${bot.attack}</p>`;
  stringToPrint += `<p>Crit Chance: ${bot.critChance}</p>`;
  stringToPrint += `<p>Crit Multiplier: ${bot.critMulti}</p>`;
  printToDom('#fighter1', stringToPrint);
};

const buildFighter2 = (bot) => {
  let stringToPrint = '';
  stringToPrint += `<p>Health: ${bot.health}</p>`;
  stringToPrint += `<p>Armor: ${bot.armor}</p>`;
  stringToPrint += `<p>Attack: ${bot.attack}</p>`;
  stringToPrint += `<p>Crit Chance: ${bot.critChance}</p>`;
  stringToPrint += `<p>Crit Multiplier: ${bot.critMulti}</p>`;
  printToDom('#fighter2', stringToPrint);
};

const printWinner = (botWinner) => {
  let stringToPrint = '';
  stringToPrint += `<h2>${botWinner.name} Wins!</h2>`;
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
