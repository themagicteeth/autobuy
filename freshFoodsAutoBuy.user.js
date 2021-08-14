// ==UserScript==
// @name        Neopian Fresh Foods Auto Buy
// @namespace   Neopets Auto Buy
// @match       http://www.neopets.com/objects.phtml?obj_type=1&type=shop
// @match       https://www.neopets.com/objects.phtml?obj_type=1&type=shop
// @match       https://www.neopets.com/haggle.phtml
// @match       http://www.neopets.com/haggle.phtml
// @require     autoBuy.js
// @require     autoHaggle.js
// @grant       none
// @version     1.0
// @author      -
// @description Auto buy for Neopian Fresh Foods
// ==/UserScript==

// Modify this list for your desired items
// Items in list from https://neopets-cheats.com/neopets-restocking-guide/
const itemsToBuy = [
    "Jelly Negg",
    "Rainbow Cybunny Negg",
    "Green Picnic Hamper",
    "Black Currant Juice",
    "Chocolate Coated Blue Cheese",
    "Plum",
    "Animal-style Chips",
    "BLT Croissant",
    "Candy Floss Carrot",
    "Chicken Filets with Fancy Sauce",
    "Chocolate Coated Cheese Strings",
    "Diet Big Gulp Neocola",
    "Olivetato",
    "Onion and Mustard Pie",
    "Polka Carrot",
    "Mighty Steakwich",
    "Mega Sandwich",
    "Puzzle Fruit",
    "Rainbow Carrot",
    "Big Gulp Neocola",
    "Borovan Layered Cake",
    "Cheesy Chocoshake",
    "Purple Picnic Hamper",
    "Blue Picnic Hamper",
    "Cheesy Chokato Pie",
    "Egg and Tomato Sandwich",
    "Golden Caviar",
    "Chokato Toffee Apple",
    "Happy Anniversary Negg",
    "Blue Cybunny Negg",
    "Mega Pipper Sandwich",
    "Upside Down Ice Cream",
    "Container of Purple Liquid",
    "Mutated Negg",
    "Pizza Sandwich",
    "Kadoatie Biscuits",
    "Bag of Peanuts",
    "Fish Negg Stew",
    "Chocolately Cheese Wedges",
    "Chocolate Sandwich"
  ]
  
buyItem(itemsToBuy)