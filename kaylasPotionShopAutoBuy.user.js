// ==UserScript==
// @name        Kayla's Potion Shop Auto Buy
// @namespace   Neopets Auto Buy
// @match       https://www.neopets.com/objects.phtml?obj_type=73&type=shop
// @match       http://www.neopets.com/objects.phtml?obj_type=73&type=shop
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

const url = document.URL;
const OCR = true;
const return_ab = true;
const min = 800;
const max = 1500;

function solve_captcha(url) {
    return new Promise( resolve => {
        let captcha = new Image();
        captcha.src = url;
        captcha.onload = () => {
            const width = captcha.width;
            const height = captcha.height;

            let canvas = unsafeWindow.document.createElement('canvas');
            canvas.width = width;
            canvas.height = width;
            canvas.getContext("2d").drawImage(captcha, 0, 0);

            const imgData = canvas.getContext("2d").getImageData(0, 0, width, height);
            let lowy = 999;
            let lowx = 999;
            let low = 999;

            for (let x = 0; x < imgData.width; x++){
                for (let y = 0; y < imgData.height; y++){
                    let i = x * 4 + y * 4 * imgData.width;
                    const avg = Math.floor((imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3);
                    if (avg < low){
                        low = avg;
                        lowx = x;
                        lowy = y;
                    }
                }
            }
            resolve({lowx, lowy});
        };
    });
}

(async () => {
    var $;
    if (typeof $ === 'undefined') $ = unsafeWindow.$;

    const html = $('html').html();

    if (url === 'http://www.neopets.com/haggle.phtml' || url === 'https://www.neopets.com/haggle.phtml'){
        if (return_ab) $.find('input[type="submit"]')[1].click();
        return;
    }

    if (url.includes('objects.phtml')){
       const content = $('table[align="center"][cellpadding="4"][border="0"]').get(0);
       $(content).find('tr').each((index, tr) => {
           $(tr).find('td').each((index, td) => {
                const b = $(td).find('b').first().html();
                if (b === 'Toy Train') {
                    $(td).remove();
                } else {
                    $(td).find('a').first().removeAttr('onclick');
                }
           });

       });
       return;
    }

    if (url.includes('haggle.phtml')) {

        if (html.includes('SOLD OUT!') && return_ab) {
           $.find('input[type="submit"]')[1].click();
        }

        var haggle_price = $('#shopkeeper_makes_deal').find('b').get(0).innerHTML;
        haggle_price = (haggle_price.match("([0-9-,]+)")[0]).replace(",", "");
        $('input[name=current_offer]').val(Math.round(parseInt(haggle_price * .88)).toString());

        if (OCR) {
            const {lowx: x, lowy: y} = await solve_captcha(document.querySelector('input[type="image"]').src);
            setTimeout(()=> {
                let haggleform = document.querySelector('form[name="haggleform"]');
                let newInput = document.createElement("input");
                let newInput2 = document.createElement("input");

                newInput.type = "hidden";
                newInput.name = "x";
                newInput.value = x;
                haggleform.appendChild(newInput);

                newInput2.type = "hidden";
                newInput2.name = "y";
                newInput2.value = y;
                
                haggleform.appendChild(newInput2);
                haggleform.submit();
            }, (min, max) => { return Math.floor(Math.random() * (max - min + 1)) + min; });
        }
        return;
    }
})();
