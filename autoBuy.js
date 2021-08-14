function getItemsInStockToBuy(itemsToBuy) {
    const itemsInStock = []
    document.querySelectorAll('.item-img').forEach(item => itemsInStock.push(item.getAttribute('data-name')));
    console.log("Items in Stock: ", itemsInStock)
    return itemsToBuy.filter(item => itemsInStock.includes(item));
  }
  
function buyItem(itemsToBuy) {
    console.log("Desired Items: ", itemsToBuy)
    const toBuy = getItemsInStockToBuy(itemsToBuy)
    if (toBuy.length === 0) {
        console.log("No items to buy")
        setTimeout(location.reload.bind(location), 7000);
    } 
  else {
        document.querySelector(`.item-img[data-name='${toBuy[0]}']`).click()
        document.getElementById('confirm-link').click()
    }
}
