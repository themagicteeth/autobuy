// ==UserScript==
// @name        Super Happy Icy Fun Snow Shop Auto Buy
// @namespace   Neopets Auto Buy
// @match       http://www.neopets.com/objects.phtml?obj_type=37&type=shop
// @match       https://www.neopets.com/objects.phtml?obj_type=37&type=shop
// @match       https://www.neopets.com/haggle.phtml
// @match       http://www.neopets.com/haggle.phtml
// @require     autoBuy.js
// @require     autoHaggle.js
// @grant       none
// @version     1.0
// @author      -
// @description Auto buy for Super Happy Icy Fun Snow Shop
// ==/UserScript==

// Modify this list for your desired items
// Items in list from https://neopets-cheats.com/neopets-restocking-guide/
const itemsToBuy = [
    "Magical Pea Chia Pop",
    "Magical Asparagus Chia Pop",
    "Magical Grape Chia Pop",
    "Magical Apple Chia Pop",
    "Magical Peach Chia Pop",
    "Magical Pear Chia Pop",
    "Magical Gooseberry Chia Pop",
    "Magical Tomato Chia Pop",
    "Magical Pepper Chia Pop",
    "Magical Agueena Chia Pop",
    "Magical Pineapple Chia Pop",
    "Magical Avocado Chia Pop",
    "Magical Durian Chia Pop",
    "Magical Ummagine Chia Pop",
    "Magical Orange Chia Pop",
    "Magical Thornberry Chia Pop",
    "Magical Carrot Chia Pop",
    "Magical Chokato Chia Pop",
    "Magical Lime Chia Pop",
    "Magical Blueberry Chia Pop",
    "Magical Aubergine Chia Pop",
    "Magical Plum Chia Pop",
    "Magical Onion Chia Pop",
    "Magical Strawberry Chia Pop",
    "Banana Split Chia Pop",
    "Tartan Chia Pop",
    "Frozen Negg",
    "Angelic Ice Lolly",
    "Hamarama Ice Lolly",
    "Maractite Ice Lolly",
    "Crystal Turkey"
  ]
  
buyItem(itemsToBuy)