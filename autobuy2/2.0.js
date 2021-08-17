// ==UserScript==
// @name        Neopets Autobuyer
// @namespace   Neopets
// @match       *://www.neopets.com/objects.phtml?obj_type=*&type=shop
// @match       *://www.neopets.com/objects.phtml?type=shop&obj_type=*
// @match       *://www.neopets.com/haggle.phtml
// @match       *://www.neopets.com/haggle.phtml*
// @grant       GM_getValue
// @grant       GM_setValue
// @version     1.0
// @author      themagicteeth
// @description Autobuyer for Neopets shops
// ==/UserScript==

// If freezing after purchase 2,000 to 4,000 is ok
const FROM = 8000
const TO = 16000

const refreshTimes = Math.floor(Math.random() * parseFloat(TO - FROM)) + parseFloat(FROM);

setTimeout(function() {
  location.href = document.location
}, refreshTimes)


function backToShop() {
  document.querySelector("#container__2020 > div.shop-bg").click()
}

function getStock() {
  const itemsInStock = []
  document.querySelectorAll('.item-img').forEach(item => itemsInStock.push(item.getAttribute('data-name')))
  return itemsInStock
}


function checkAutoBuy(itemsToBuy) {
  const inStock = getStock()
  if (inStock !== []) {
    const toBuy = itemsToBuy.filter(item => itemsInStock.includes(item));
    if (toBuy.length === 0) {
      
    } else {
        document.querySelector(`.item-img[data-name='${toBuy[0]}']`).click()
        document.getElementById('confirm-link').click()
        haggleForItem()
    }
  }
}

function smartHaggle() {
    const hagglePrice = (
      document.getElementById('shopkeeper_makes_deal')
      .find('b')
      .get(0)
      .innerHTML
      .match("([0-9-,]+)")[0])
      .replace(",", "")

    const val = [
      hagglePrice.substr(0, 1),
      hagglePrice.substr(1, 1)
    ]

    let endPrice = ""
    for(let x = 0; x < hagglePrice.length; x++) {
        endPrice += val[(x % 2)]
    }
  
    return endPrice
}


function haggleForItem() {
  const hagglePrice = smartHaggle()
  document.querySelector('input[name=current_offer]').value = hagglePrice;
}
