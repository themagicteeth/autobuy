// ==UserScript==
// @name        Auto Buy - Core
// @namespace   Neopets Auto Buy
// @match       none
// @grant       none
// @version     1.0
// @author      -
// @description Core functionality for the auto buying scripts
// ==/UserScript==


function getItemsInStockToBuy() {
    const itemsInStock = []
    document.querySelectorAll('.item-img').forEach(item => itemsInStock.push(item.getAttribute('data-name')));
    return itemsToBuy.filter(item => itemsInStock.includes(item));
  }
  
function buyItem() {
    const toBuy = getItemsInStockToBuy()
    document.querySelector(`.item-img[data-name='${toBuy[0]}']`).click()
    document.getElementById('confirm-link').click()
}

buyItem()
  