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
  let stringToPrint = '';
  stringToPrint +=  `<div id='${bot1.name}' class="col-md-12 robot">`;
  stringToPrint +=  `<div class="thumbnail">`;
  stringToPrint +=  `<img src="${bot1.img}" alt="...">`;
  stringToPrint +=  `<div class="caption">`;
  stringToPrint +=    `<h4>${bot1.name}</h4>`;
  stringToPrint +=  `</div>`;
  stringToPrint += `</div>`;
  stringToPrint += `</div>`;
  printToDom('#player1', stringToPrint);
};

const printPlayer2 = (bot2) => {
  let stringToPrint = '';
  stringToPrint +=  `<div id='${bot2.name}' class="col-md-12 robot">`;
  stringToPrint +=  `<div class="thumbnail">`;
  stringToPrint +=  `<img src="${bot2.img}" alt="...">`;
  stringToPrint +=  `<div class="caption">`;
  stringToPrint +=    `<h4>${bot2.name}</h4>`;
  stringToPrint +=  `</div>`;
  stringToPrint += `</div>`;
  stringToPrint += `</div>`;
  printToDom('#player2', stringToPrint);
};

module.exports = {
  printAllBots,
  printPlayer1,
  printPlayer2,
};
