//const { fishMenu } = require("./restaurant.js")

import { fishMenu } from "./restaurant.js";

const dailyPriceLimit = 4.99
const menuHtml = fishMenu(dailyPriceLimit)

const menuContainer = document.getElementById('menu-container');

menuContainer.innerHTML = menuHtml;


