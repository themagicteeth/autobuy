function getItemsInStockToBuy(itemsToBuy) {
    const itemsInStock = []
    document.querySelectorAll('.item-img').forEach(item => itemsInStock.push(item.getAttribute('data-name')));
    return itemsToBuy.filter(item => itemsInStock.includes(item));
  }
  
function buyItem(itemsToBuy) {
    const toBuy = getItemsInStockToBuy(itemsToBuy)
    document.querySelector(`.item-img[data-name='${toBuy[0]}']`).click()
    document.getElementById('confirm-link').click()
}
