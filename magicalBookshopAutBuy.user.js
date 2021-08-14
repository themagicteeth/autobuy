// ==UserScript==
// @name        Magical Bookshop Auto Buy
// @namespace   Neopets Auto Buy
// @match       http://www.neopets.com/objects.phtml?obj_type=7&type=shop
// @match       https://www.neopets.com/objects.phtml?obj_type=7&type=shop
// @match       https://www.neopets.com/haggle.phtml
// @match       http://www.neopets.com/haggle.phtml
// @require     autoBuy.js
// @require     autoHaggle.js
// @grant       none
// @version     1.0
// @author      -
// @description Auto buy for Magical Bookshop
// ==/UserScript==

// Modify this list for your desired items
// Items in list from https://neopets-cheats.com/neopets-restocking-guide/
const itemsToBuy = [
    "Culture and History of Faerieland",
    "Bruces Guide to Combat Eating",
    "A Chia Story",
    "Super Secret Guide to the Defenders of Neopia Headquarters",
    "A History of Chias",
    "Illusens Diary",
    "The Voodoo Techo",
    "Beating Sloth",
    "A Seasonal Pea",
    "Ultimate Space Chronicles Set",
    "Brain Trees Brainiac",
    "Lenny Cookbook",
    "Best Friends",
    "Inside the Mind of Bob",
    "Decoding a Coded Decoding Book",
    "The Shadow Usul",
    "Cures for Bad Breath",
    "Olde Zafara",
    "A Chia Halloween",
    "Neopian Heroes",
    "Inside the Gifts for your Enemies",
    "Sophie, A Biography",
    "Forbidden Zafara",
    "Petfolio",
    "Trigonometry Hyperbolics",
    "Uni Myths",
    "The Bad Skeith",
    "The Magic Staff",
    "Zafara Mystery Collection",
    "Chomby Mysteries",
    "Koya Korbat Huntress"
]

buyItem(itemsToBuy)