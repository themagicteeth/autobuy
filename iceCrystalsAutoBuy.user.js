// ==UserScript==
// @name        Ice Crystal Shop Auto Buy
// @namespace   Neopets Auto Buy
// @match       https://www.neopets.com/objects.phtml?obj_type=36&type=shop
// @match       http://www.neopets.com/objects.phtml?obj_type=36&type=shop
// @match       https://www.neopets.com/haggle.phtml
// @match       http://www.neopets.com/haggle.phtml
// @require     autoBuy.js
// @require     autoHaggle.js
// @grant       none
// @version     1.0
// @author      -
// @description Auto buy for Ice Crystal Shop
// ==/UserScript==

// This is classified as easy to sell

// Modify this list for your desired items
// Items in list from https://neopets-cheats.com/neopets-restocking-guide/
const itemsToBuy = [
    "Freezing Potion",
    "Icy Snowflake",
    "Ice Sceptre",
    "Snowflake Pendant",
    "Claw of the Ancient Bori",
    "Frozen Scroll",
    "Stone Snowflake",
    "Unlockable Ice Treasure",
    "Frozen Wave Scimitar",
    "Frozen Water Daggers"
]

buyItem(itemsToBuy)