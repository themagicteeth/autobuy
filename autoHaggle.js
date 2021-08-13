// ==UserScript==
// @name        Neopets Auto Haggler
// @version     2.0.1
// @namespace   Neopets Auto Buy
// @description Neopets autohaggler, part of the Auto Buy Suite
// @Match       http://www.neopets.com/haggle.phtml*
// @Match       http://www.neopets.com/haggle.phtml
// @include     http://www.neopets.com/objects.phtml?obj_type=*&type=shop
// @include     http://www.neopets.com/objects.phtml?type=shop&obj_type=*
// ==/UserScript==

var url = document.URL;
var OCR = true;
var return_ab = true;
var min = 800;
var max = 1500;

function solve_captcha(url) {
    return new Promise( resolve => {
        var captcha = new Image();
        captcha.src = url;
        captcha.onload = () => {
            var width = captcha.width;
            var height = captcha.height;

            var canvas = unsafeWindow.document.createElement('canvas');
            canvas.width = width;
            canvas.height = width;
            canvas.getContext("2d").drawImage(captcha, 0, 0);

            var imgData = canvas.getContext("2d").getImageData(0, 0, width, height);
            var lowy = 999;
            var lowx = 999;
            var low = 999;

            for (var x = 0; x < imgData.width; x++){
                for (var y = 0; y < imgData.height; y++){
                    var i = x*4+y*4*imgData.width;
                    var avg = Math.floor((imgData.data[i]+imgData.data[i+1]+imgData.data[i+2])/3);
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

    if(url === 'http://www.neopets.com/haggle.phtml' || url === 'https://www.neopets.com/haggle.phtml'){
        if(return_ab) $.find('input[type="submit"]')[1].click();
        return;
    }

    if(url.includes('objects.phtml')){
       var content = $('table[align="center"][cellpadding="4"][border="0"]').get(0);
       $(content).find('tr').each((index, tr) => {

           $(tr).find('td').each((index, td) => {
                const b = $(td).find('b').first().html();
                if(b === 'Toy Train'){
                    $(td).remove();
                } else {
                    $(td).find('a').first().removeAttr('onclick');
                }
           });

       });
       return;
    }

    if(url.includes('haggle.phtml')){

        if(html.includes('SOLD OUT!')){
           if(return_ab) $.find('input[type="submit"]')[1].click();
           return;
        }

        var haggle_price = $('#shopkeeper_makes_deal').find('b').get(0).innerHTML;
        haggle_price = (haggle_price.match("([0-9-,]+)")[0]).replace(",", "");
        $('input[name=current_offer]').val(Math.round(parseInt(haggle_price * .88)).toString());

        if(OCR){
            const {lowx: x, lowy: y} = await solve_captcha(document.querySelector('input[type="image"]').src);
            setTimeout(()=> {
                var haggleform = document.querySelector('form[name="haggleform"]');
                var newInput = document.createElement("input");
                var newInput2 = document.createElement("input");

                newInput.type="hidden";
                newInput.name="x";
                newInput.value=x;
                haggleform.appendChild(newInput);

                newInput2.type="hidden";
                newInput2.name="y";
                newInput2.value=y;
                haggleform.appendChild(newInput2);
                haggleform.submit();
            }, (min, max) => { return Math.floor(Math.random() * (max - min + 1)) + min; });
        }
        return;
    }
})();