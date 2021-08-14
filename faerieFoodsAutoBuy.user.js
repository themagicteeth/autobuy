// ==UserScript==
// @name        Faerie Food Auto Buy
// @namespace   Neopets Auto Buy
// @match       http://www.neopets.com/objects.phtml?obj_type=39&type=shop
// @match       https://www.neopets.com/objects.phtml?obj_type=39&type=shop
// @match       https://www.neopets.com/haggle.phtml
// @match       http://www.neopets.com/haggle.phtml
// @require     autoBuy.js
// @require     autoHaggle.js
// @grant       none
// @version     1.0
// @author      -
// @description Auto buy for Faerie Foods
// ==/UserScript==

// Modify this list for your desired items
// Items in list from https://neopets-cheats.com/neopets-restocking-guide/
const itemsToBuy = [
    "Grey Faerie Mushroom",
    "Fyora Apple",
    "Space Faerie Mushroom",
    "Faerie Sparklecake",
    "Faerie Fruit Salad",
    "Faerie Chocodrop",
    "Bacon Belly Buster",
    "Ultra Nova Pop",
    "Faerie Dreamwich",
    "Fire Faerie Red Pepper",
    "Deluxe Fyora Day Cake",
    "Faerie Block Mallows",
    "Sugar Coated Leaf",
    "Dark Nova Pop",
    "Light Faerie Mushroom",
    "Soup Faerie Mushroom",
    "Fire Faerie Mushroom",
    "Dark Faerie Mushroom",
    "Earth Faerie Mushroom",
    "Water Faerie Mushroom"
]

buyItem(itemsToBuy)