let cart = [];

let menuItem = document.querySelectorAll('.menu-item');
const cartItem = document.getElementById("cart-item");
const totalPrice = document.getElementById("total-price");

function updateCart() {
    // Clear current cartItem
    cartItem.innerHTML = "";
  
    // Add each item in the cart to the list
    let total = 0;
    cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - Rs ${item.price}`;
      cartItem.appendChild(li);
      total += parseFloat(item.price);  
    });
  
    // Update total price
    totalPrice.textContent = `Total: Rs ${total}`;
};


menuItem.forEach(item => {

    item.addEventListener("click", () => {
      const itemName = item.getAttribute("name");
      const itemPrice = item.getAttribute("price");
  
      // Check if the item is already in the cart
      const itemIndex = cart.findIndex(cartItem => cartItem.name === itemName);
  
      if (itemIndex != -1) {
        // Item is in cart --- remove it
        cart.splice(itemIndex, 1);
        item.classList.remove("selected");
      } else {
        // Item not in cart ---- add it
        cart.push({ name: itemName, price: itemPrice });
        item.classList.add("selected");
      }
  
      // Update the cart display
      updateCart();
    });
  });

  