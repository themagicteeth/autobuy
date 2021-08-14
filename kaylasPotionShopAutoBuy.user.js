// ==UserScript==
// @name        Kayla's Potion Shop Auto Buy
// @namespace   Neopets Auto Buy
// @match       https://www.neopets.com/objects.phtml?obj_type=73&type=shop
// @match       http://www.neopets.com/objects.phtml?obj_type=73&type=shop
// @match       https://www.neopets.com/haggle.phtml
// @match       http://www.neopets.com/haggle.phtml
// @require     autoBuy.js
// @require     autoHaggle.js
// @grant       none
// @version     1.0
// @author      -
// @description Auto buy for Kayla's Potion Shop
// ==/UserScript==

const itemsToBuy = [
    "Elixir of Levelling",
    "Bubbling Fungus",
    "Kaylas Super Special Potion",
    "Energising Elixir",
    "Therapeutic Swamp Water",
    "Kaylas Golden Brew",
    "Potion of Doldrums",
    "Strength Serum",
    "Meridellian Potion of Defence",
    "Twisted Potion of Strength",
    "Mano Root Elixir",
    "Illusens Forest Essence",
    "Jar of Forest Earth",
    "Potato Potion",
    "Bullseye Potion",
    "Bomberry Elixir",
    "Cooling Balm of the Warrior",
    "Essence of Drackonack"
]

buyItem(itemsToBuy)