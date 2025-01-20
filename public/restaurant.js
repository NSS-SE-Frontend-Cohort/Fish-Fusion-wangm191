const { mongerInventory } = require("./fishMonger.js");

const fishMenu = function(dailyPriceLimit) {
    const fishInventory = mongerInventory(dailyPriceLimit);
    let html = `<h1>Menu</h1><article class="menu">`;  // No leading or trailing spaces/newlines

    fishInventory.forEach(fish => {
    html += `<h2>${fish.species}</h2> 
    <section class="menu__item">${fish.species} Soup</section> 
    <section class="menu__item">${fish.species} Sandwich</section> 
    <section class="menu__item">Grilled ${fish.species}</section>`;
    });

    html += `</article>`; // Close article tag

    return html;
};

module.exports = { fishMenu };
