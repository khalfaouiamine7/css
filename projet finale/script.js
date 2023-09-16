const cart = [];

function addToCart(productName, price) {
  const existingItem = cart.find(item => item.productName === productName);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    const newItem = { productName, price, quantity: 1 };
    cart.push(newItem);
  }

  updateCart();
}

function removeFromCart(productName) {
  const itemIndex = cart.findIndex(item => item.productName === productName);

  if (itemIndex !== -1) {
    const item = cart[itemIndex];
    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      cart.splice(itemIndex, 1);
    }
  }

  updateCart();
}

function updateCart() {
  const cartElement = document.getElementById('cart');
  cartElement.innerHTML = '';

  let total = 0;   

  cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.productName} - dt${item.price} x ${item.quantity}`;
    
    const plusButton = document.createElement('button');
    plusButton.textContent = '+';
    plusButton.onclick = () => addToCart(item.productName, item.price);

    const minusButton = document.createElement('button');
    minusButton.textContent = '-';
    minusButton.onclick = () => removeFromCart(item.productName);

    listItem.appendChild(plusButton);
    listItem.appendChild(minusButton);

    cartElement.appendChild(listItem);
    total += item.price * item.quantity;
  });

  const totalElement = document.createElement('li');
  totalElement.textContent = `Total: dt${total}`;
  cartElement.appendChild(totalElement);
}