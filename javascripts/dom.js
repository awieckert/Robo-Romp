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
      stringToPrint +=  `<div class="col-sm-6 col-md-2 col-md-offset-2">`;
    } else {
      stringToPrint +=  `<div class="col-sm-6 col-md-2 col-md-offset-1">`;
    }
    stringToPrint +=  `<div class="thumbnail">`;
    stringToPrint +=  `<img src="${atv.img}" alt="...">`;
    stringToPrint +=  `<div class="caption">`;
    stringToPrint +=    `<h3>${atv.name}</h3>`;
    stringToPrint +=    `<p>${atv.description}</p>`;
    stringToPrint +=  `</div>`;
    stringToPrint += `</div>`;
    stringToPrint += `</div>`;
  });
  rogues.forEach((rogue, i) => {
    if (i === 1) {
      stringToPrint +=  `<div class="col-sm-6 col-md-2 col-md-offset-2">`;
    } else {
      stringToPrint +=  `<div class="col-sm-6 col-md-2 col-md-offset-1">`;
    }
    stringToPrint +=  `<div class="thumbnail">`;
    stringToPrint +=  `<img src="${rogue.img}" alt="...">`;
    stringToPrint +=  `<div class="caption">`;
    stringToPrint +=    `<h3>${rogue.name}</h3>`;
    stringToPrint +=    `<p>${rogue.description}</p>`;
    stringToPrint +=  `</div>`;
    stringToPrint += `</div>`;
    stringToPrint += `</div>`;
  });
  flyers.forEach((flyer, i) => {
    stringToPrint +=  `<div class="col-sm-6 col-md-2 col-md-offset-1">`;
    stringToPrint +=  `<div class="thumbnail">`;
    stringToPrint +=  `<img src="${flyer.img}" alt="...">`;
    stringToPrint +=  `<div class="caption">`;
    stringToPrint +=    `<h3>${flyer.name}</h3>`;
    stringToPrint +=    `<p>${flyer.description}</p>`;
    stringToPrint +=  `</div>`;
    stringToPrint += `</div>`;
    stringToPrint += `</div>`;
  });
  printToDom('#robots-container', stringToPrint);
};

module.exports = {
  printAllBots,
};
