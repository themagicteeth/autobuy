// ==UserScript==
// @name        Battle Magic Auto Buy
// @namespace   Neopets Auto Buy
// @match       https://www.neopets.com/objects.phtml?obj_type=9&type=shop
// @match       http://www.neopets.com/objects.phtml?obj_type=9&type=shop
// @match       https://www.neopets.com/haggle.phtml
// @match       http://www.neopets.com/haggle.phtml
// @require     autoBuy.js
// @require     autoHaggle.js
// @grant       none
// @version     1.0
// @author      -
// @description Auto buy for Battle Magic Shop
// ==/UserScript==

// This is classified as hard to sell

// Modify this list for your desired items
// Items in list from https://neopets-cheats.com/neopets-restocking-guide/
const itemsToBuy = [
    "Bony Grarrl Club",
    "Hand Carved Draik Slingshot",
    "Kacheek Flour",
    "Draik Enhancement Brew",
    "Icy Chia Goggles",
    "Water Faerie Token",
    "Golden Peophin Harp",
    "Kaylas Hat",
    "Illusens Gems",
    "Chilli Sword",
    "Battle Faerie Sword",
    "Taelias Snowball",
    "Battle Quill",
    "Glittery Scorchstone"
]

buyItem(itemsToBuy)