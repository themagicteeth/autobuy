// ==UserScript==
// @name        Pharmacy Auto Buy
// @namespace   Neopets Auto Buy
// @match       http://www.neopets.com/objects.phtml?obj_type=13&type=shop
// @match       https://www.neopets.com/objects.phtml?obj_type=13&type=shop
// @match       https://www.neopets.com/haggle.phtml
// @match       http://www.neopets.com/haggle.phtml
// @require     autoBuy.js
// @require     autoHaggle.js
// @grant       none
// @version     1.0
// @author      -
// @description Auto buy for the Pharmacy
// ==/UserScript==

// Modify this list for your desired items
// Items in list from https://neopets-cheats.com/neopets-restocking-guide/
const itemsToBuy = [
    "Sporkle Syrup",
    "Extra Thick Goggles"
  ]

buyItem(itemsToBuy)