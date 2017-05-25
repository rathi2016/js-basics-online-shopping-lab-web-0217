var cart = [];

function setCart(newCart) {
  cart = newCart;
};

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }
  return t
};

function getCart() {
  return cart
};

function addToCart(item) {
var price =  Math.floor(Math.random() * (100)) ;
cart.push({[item] : price})
//  why do we have to make new object with [item] but not {item : price }
console.log(`${item} has been added to your cart.`)
return cart
};

/* Define a function viewCart which does not accept any arguments.
This function should loop over every item in cart to print out
"In your cart you have [item and price pairs].". If there isn't anything in your cart,
the function should print out "Your shopping cart is empty.". */


function viewCart() {
  const itemsAndPrices = []

  if (!cart.length) {
  return console.log("Your shopping cart is empty.")
  }

  for (var i = 0,l = cart.length; i<l ; i++){
    for (var ItemPrice in cart[i]) {
      itemsAndPrices.push(`${Object.keys(cart[i])[0]} at \$${cart[i][Object.keys(cart[i])[0]]}`)
    }
  }
  console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)

};

//  stack over flow : someArray.splice(x,1);
function removeFromCart(item) {
  let x = false

   for (let i = 0, l = cart.length; i < l; i++){
     if (cart[i].hasOwnProperty(item)) {
          x = true
          cart.splice(i)
     }

   }
   if (!x){
      console.log("That item is not in your cart.")
   }
   return cart
};

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return console.log("We don't have a credit card on file for you to place your order.")
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)

  cart = []
};
