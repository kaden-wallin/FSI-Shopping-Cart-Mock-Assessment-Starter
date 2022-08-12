function updateQuantity(displayQuantity){
    let quantity = document.querySelector('.total-quantity')
    quantity.innerHTML = displayQuantity
}

let quantity = 1

const quantityUp = document.querySelector('#quantity-up')

const quantityDown = document.querySelector('#quantity-down')

quantityUp.addEventListener('click',function(){
    quantity++
    updateQuantity(`Quantity: ${quantity}`)
})

quantityDown.addEventListener('click',function(e){
    if (quantity > 0) {
        quantity--
    }
    updateQuantity(`Quantity: ${quantity}`)
})

