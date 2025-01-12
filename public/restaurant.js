// Common JS module system used in Node.js
//const { chefPurchases } = require("./fishMonger.js")

import { chefPurchases } from './fishMonger.js'

const meals = [ "Soup", "Sandwich", "Grilled" ]

export const fishMenu = function(dailyPriceLimit){
    const fishInventory = chefPurchases(dailyPriceLimit)
    let html = "<h1>Menu</h1>";

    fishInventory.forEach(fish => {
        html += `<article class="menu">`;
        html += `<h2>${fish.species}</h2>`;
        meals.forEach(meal => {
            if (meal === "Grilled"){
                html += `<section class="menu__item">${meal}`+` `+`${fish.species}</section>`;
            }
            else{
                html += `<section class="menu__item">${fish.species}`+` `+`${meal}</section>`;
            }})
      html += `</article>`;
    });
    return html;
}

//module.exports = { fishMenu }
