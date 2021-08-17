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
    const toBuy = itemsToBuy.filter(item => inStock.includes(item));
    if (toBuy.length === 0) {
      // If freezing after purchase 2,000 to 4,000 is ok
      const FROM = 8000
      const TO = 16000
      
      const refreshTimes = Math.floor(Math.random() * parseFloat(TO - FROM)) + parseFloat(FROM)
      
      setTimeout(function() {
        location.href = document.location
      }, refreshTimes)
    } else {
        document.querySelector(`.item-img[data-name='${toBuy[0]}']`).click()
        document.getElementById('confirm-link').click()
        haggleForItem()
    }
  }
}

function solveCaptcha(url) {
  return new Promise(resolve => {
    let captcha = new Image();
    captcha.src = url;
    captcha.onload = () => {
      const width = captcha.width
      const height = captcha.height

      let canvas = unsafeWindow.document.createElement('canvas');
      canvas.width = width;
      canvas.height = width;
      canvas.getContext("2d").drawImage(captcha, 0, 0);

      const imgData = canvas.getContext("2d").getImageData(0, 0, width, height)
      let lowy = 999
      let lowx = 999
      let low = 999

      for (let x = 0; x < imgData.width; x++) {
        for (let y = 0; y < imgData.height; y++) {
          const i = x * 4 + y * 4 * imgData.width
          const avg = Math.floor((imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3);
          if (avg < low) {
            low = avg
            lowx = x
            lowy = y
          }
        }
      }
      resolve({lowx, lowy})
    }
  })
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


async function haggleForItem() {
  const hagglePrice = smartHaggle()
  document.querySelector('input[name=current_offer]').value = hagglePrice
  
  const {lowx: x, lowy: y} = await solveCaptcha(document.querySelector('input[type="image"]').src)
  
  setTimeout(()=> {
    let haggleform = document.querySelector('form[name="haggleform"]')
    let newInput = document.createElement("input")
    let newInput2 = document.createElement("input")

    newInput.type = "hidden"
    newInput.name = "x"
    newInput.value = x
    haggleform.appendChild(newInput)

    newInput2.type = "hidden"
    newInput2.name = "y"
    newInput2.value = y
    haggleform.appendChild(newInput2)
    haggleform.submit()
  }, (min, max) => { return Math.floor(Math.random() * (max - min + 1)) + min })
}

function autoBuy(itemsToBuy) {
  
}
