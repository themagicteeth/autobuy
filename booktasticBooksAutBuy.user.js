// ==UserScript==
// @name        Booktastic Books Auto Buy
// @namespace   Neopets Auto Buy
// @match       http://www.neopets.com/objects.phtml?obj_type=70&type=shop
// @match       https://www.neopets.com/objects.phtml?obj_type=70&type=shop
// @match       https://www.neopets.com/haggle.phtml
// @match       http://www.neopets.com/haggle.phtml
// @require     autoBuy.js
// @require     autoHaggle.js
// @grant       none
// @version     1.0
// @author      -
// @description Auto buy for Booktastic Books
// ==/UserScript==

// Modify this list for your desired items
// Items in list from https://neopets-cheats.com/neopets-restocking-guide/
const itemsToBuy = [
    "It Came From Kreludor",
    "Kreludor Mining Corridor Maps",
    "Alien Aisha Invasion",
    "Guide to the Neocola Machine",
    "Space Station Schematics",
    "It Came From the Mine",
    "The Space Ace",
    "Kreludan Cookie Cookbook",
    "The Big Book of Intermediate Evil Plots",
    "Secrets of the Universe",
    "Kreludan Architecture",
    "Diary of a Baby Space Fungus",
    "Advanced Kreludan Physics",
    "Beam Me Aboard",
    "How Purples Got Their Spots",
    "Interplanetary Communications",
    "Know Your Robot Petpet",
    "Kreludan Engineering",
    "Kreludor Versus Neopia",
    "Scenic Kreludan Views",
    "The Green Grundo Invasion"
]

buyItem(itemsToBuy)