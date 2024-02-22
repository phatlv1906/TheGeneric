// const btnRemove = document.getElementsByClassName('.btn-remove');
// for(let i = 0; i < btnRemove.length; i++){
//     let buttonRe = btnRemove[i];
//     buttonRe.addEventListener
// }
const updateCartTotal = () => {
    const getContainer = document.getElementsByClassName('cart-items')[0];
    let cartRow = getContainer.querySelectorAll('.cart-row');
    let total = 0;
    cartRow.forEach(row => {
        let priceElement = row.querySelector('.cart-price');
        cartQuantity = row.querySelector('.cart-quantity-input').value;
        let price = parseFloat(priceElement.innerText.replace('$', ' '));
        total += price*cartQuantity;
    });
    document.querySelector('.cart-total-price').innerHTML = total;
};



const updateQuantityCart = () =>{
    let inputQuantity = document.querySelectorAll('.cart-quantity-input');
    inputQuantity.forEach(input =>{
        input.addEventListener('change', (event) =>{
            inputChanged = event.target;
            if(isNaN(inputChanged.value) || inputChanged.value <= 0){
                inputChanged.value = 1;
            }
            updateCartTotal();
        });  
    })
}
const addToCart = (title, price, image) =>{
    let cartRow = document.createElement('div');
    let cartItems = document.querySelector('.cart-items');
    let cartItemNames = cartItems.getElementsByClassName('cart-item-title');
    for(let i = 0; i < cartItemNames.length; i++){
        if(cartItemNames[i].innerText === title){
            console.log(cartItemNames[i].innerText);
            return
        }else {
            // cartRow.classList.add('cart-row');
            // cartRow.innerHTML = `
            // <div class="cart-item cart-column">
            //     <img src="${image}" alt="" width="100px" height="100px" class="cart-item-image">
            //     <span class="cart-item-title">${title}</span>
            // </div>
            // <span class="cart-price cart-column">${price}</span>
            // <div class="cart-quantity cart-column">
            //     <input class="cart-quantity-input" type="number" value="1">
            //     <button class="btn-remove">REMOVE</button>
            // </div>
            // `
            // cartItems.appendChild(cartRow);
        }
    }

}
let addToCartBtn = document.querySelectorAll(".btn-add-to-cart");
addToCartBtn.forEach(button => {
    button.addEventListener('click', (event) =>{
        let btnAdded = event.target;
        let getItem = btnAdded.parentElement.parentElement;
        let itemName = getItem.getElementsByClassName('store-name')[0].innerText;
        let itemImage = getItem.getElementsByClassName('img-item')[0].src;
        let itemPrice =  getItem.getElementsByClassName('item-price')[0].innerText;
        addToCart(itemName, itemPrice, itemImage);
    });
});

let btnRemove = document.querySelectorAll('.btn-remove');
btnRemove.forEach(btn => {
    btn.addEventListener('click', (event) => {
        let btnReClicked = event.target;
        btnReClicked.parentElement.parentElement.remove();
        updateCartTotal();
    });
});
updateQuantityCart();
updateCartTotal();