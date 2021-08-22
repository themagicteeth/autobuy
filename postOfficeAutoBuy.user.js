// ==UserScript==
// @name        Post Office
// @namespace   Neopets Auto Buy
// @match       *://www.neopets.com/objects.phtml?obj_type=58&type=shop
// @match       *://www.neopets.com/objects.phtml?type=shop&obj_type=3
// @match       *://www.neopets.com/haggle.phtml
// @match       *://www.neopets.com/haggle.phtml*
// @require     autoBuy.js
// @grant       none
// @version     1.0
// @author      -
// @description Auto buy for Post Office
// ==/UserScript==

// Modify this list for your desired items
// Items in list from https://neopets-cheats.com/neopets-restocking-guide/
const itemsToBuy = [
    "Battle Slices Stamp",
    "Sticky Snowflake Stamp",
    "Shenkuu Stamp",
    "Queen Fyora Stamp",
    "Snowbunny Stamp",
    "King Kelpbeard Stamp",
    "Captain Scarblade Stamp",
    "The Great Battle Stamp",
    "Darigan Spectre Stamp",
    "King Altador Stamp",
    "Lab Ray Stamp",
    "ARGH!!!! DONNA STAMP",
    "Scuzzy Stamp",
    "The Three Stamp",
    "Terask Stamp",
    "Sasha Stamp",
    "Igneot Stamp",
    "Lord Kass Stamp",
    "King Jazan Stamp",
    "Holographic Magax Stamp",
    "Need a Better Printer Stamp",
    "Misprint Meuka Stamp",
    "Holographic Virtupets Stamp",
    "Holographic Coltzans Shrine Stamp",
    "Misaligned Printer Stamp",
    "Foil Slorg Stamp",
    "Xantan Stamp",
    "Inverted Space Faerie Stamp",
    "Foil Food Shop Stamp",
    "Dark Battle Duck Stamp",
    "Double Printed Evil Fuzzle Stamp",
    "Nibbled Cooking Pot Stamp",
    "Upside Down Island Acara Stamp",
    "Jhudoras Cloud Stamp",
    "Quilin Stamp",
    "Skeith Defender Stamp",
    "Ready to Roll Stamp",
    "One Hundred Million Neopoint Stamp"
  ]
  
if (document.URL.includes("objects")) {
 const FROM = 9000
 const TO = 17000

 const refreshTimes = Math.floor(Math.random() * parseFloat(TO - FROM)) + parseFloat(FROM)

 buyItem(itemsToBuy, refreshTimes) 
}
