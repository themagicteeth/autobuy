// ==UserScript==
// @name        Merifoods Auto Buy
// @namespace   Neopets Auto Buy
// @match       http://www.neopets.com/objects.phtml?obj_type=56&type=shop
// @match       https://www.neopets.com/objects.phtml?obj_type=56&type=shop
// @match       https://www.neopets.com/haggle.phtml
// @match       http://www.neopets.com/haggle.phtml
// @require     autoBuy.js
// @require     autoHaggle.js
// @grant       none
// @version     1.0
// @author      -
// @description Auto buy for Merifoods
// ==/UserScript==

// Modify this list for your desired items
// Items in list from https://neopets-cheats.com/neopets-restocking-guide/
const itemsToBuy = [
    "Pootato",
    "Green Draik Egg",
    "Zombie Draik Egg",
    "Darigan Draik Egg",
    "Ice Draik Egg",
    "Red Draik Egg",
    "Yellow Draik Egg",
    "Blue Draik Egg",
    "Leaf Taco",
    "Bread Wreath",
    "Fresh Fruit Goblet",
    "Roast Pork",
    "Meridellian Style Mashed Potatoes"
  ]

buyItem(itemsToBuy)