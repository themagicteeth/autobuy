// ==UserScript==
// @name        Spooky Foods Auto Buy
// @namespace   Neopets Auto Buy
// @match       https://www.neopets.com/objects.phtml?obj_type=30&type=shop
// @match       http://www.neopets.com/objects.phtml?obj_type=30&type=shop
// @match       http://www.neopets.com/objects.phtml?type=shop&obj_type=30
// @match       https://www.neopets.com/objects.phtml?type=shop&obj_type=30
// @match       https://www.neopets.com/haggle.phtml
// @match       https://www.neopets.com/haggle.phtml*
// @match       http://www.neopets.com/haggle.phtml*
// @match       http://www.neopets.com/haggle.phtml
// @require     autoBuy.js
// @grant       none
// @version     1.0
// @author      -
// @description Auto buy for Spooky Foods
// ==/UserScript==

// Modify this list for your desired items
// Items in list from https://neopets-cheats.com/neopets-restocking-guide/
const itemsToBuy = [
    "Cadaverous Cola",
    "Elderly Apple",
    "Snorkle Pudding",
    "Jelly Finger",
    "Coco Pumpkin",
    "Forgotten Apple",
    "Poison Apples",
    "Rotting Veggies Salad",
    "Pumpkin Scoopings",
    "Mouldy Cheese",
    "Parts on a Pizza",
    "Gorerito",
    "Jelly Spider Eyeball",
    "Halloween Candy Cane",
    "Runny Snot",
    "Blue Pepper Porridge",
    "Pink Apple Lantern",
    "Crunchy Snotball",
    "Wing of Korbat",
    "Meerca Pie",
    "Apple Lantern",
    "Spoooky Muffin",
    "Pink Spooky Ice Cream",
    "Grundo Toe Lint",
    "Ghost Puff",
    "Coffee of the Dead"
]

if (document.URL !== 'http://www.neopets.com/haggle.phtml'){
    buyItem(itemsToBuy, 9000)
}
