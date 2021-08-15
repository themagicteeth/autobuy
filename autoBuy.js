
var url = document.URL;
var OCR = true;
var return_ab = true;
var min = 800;
var max = 1500;
const html = $('html').html();


if(html.includes('I accept your offer') || html.includes('SOLD OUT!') || html.includes('five seconds')){
  document.querySelector("#container__2020 > div.shop-bg").click()
}

function buyItem(itemsToBuy, refreshDelay) {
  const itemsInStock = []
  document.querySelectorAll('.item-img').forEach(item => itemsInStock.push(item.getAttribute('data-name')));
  if (itemsInStock === []) {
    setTimeout(location.reload.bind(location), 20000);
  } else {
    const toBuy = itemsToBuy.filter(item => itemsInStock.includes(item));
    if (toBuy.length === 0) {
        console.log("No items to buy")
        setTimeout(location.reload.bind(location), refreshDelay);
    } 
  else {
        console.log(toBuy)
        document.querySelector(`.item-img[data-name='${toBuy[0]}']`).click()
        document.getElementById('confirm-link').click()
    }
  }
}

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

function smart_haggle(haggle_price){
    console.log('haggle_price', haggle_price);
    var val = new Array(2);
    val[0] = haggle_price.substr(0, 1);
    val[1] = haggle_price.substr(1, 1);
    console.log('val0', val[0]);
    console.log('val1', val[1]);

    var x = 0;
    var end_price = "";

    for(x=0; x<haggle_price.length; x++){
        end_price += val[(x%2)];
    }
    return end_price;
}

(async () => {
    var $;
    if (typeof $ === 'undefined') $ = unsafeWindow.$;

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
        var haggle_price = $('#shopkeeper_makes_deal').find('b').get(0).innerHTML;
        haggle_price = (haggle_price.match("([0-9-,]+)")[0]).replace(",", "");
        $('input[name=current_offer]').val(smart_haggle(haggle_price));

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


