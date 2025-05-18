let cart = [];

function addToCart(course, price) {
  cart.push({ course, price });
  alert(`${course} added to cart!`);
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartList = document.getElementById('cart-items');
  const totalDisplay = document.getElementById('total');
  if (!cartList || !totalDisplay) return;

  cartList.innerHTML = '';
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement('li');
    li.textContent = `${item.course} - KES ${item.price}`;
    cartList.appendChild(li);
  });

  totalDisplay.textContent = `Total: KES ${total}`;
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty.");
  } else {
    alert("Checkout successful! Thank you for choosing LearnTech.");
    cart = [];
    updateCartDisplay();
  }
}
function clearCart() {
  cart = [];
  updateCartDisplay();
  alert("Your cart has been cleared.");
} 
function removeFromCart(index) {
  if (index >= 0 && index < cart.length) {
    const removedItem = cart.splice(index, 1);
    alert(`${removedItem[0].course} removed from cart!`);
    updateCartDisplay();
  } else {
    alert("Invalid item index.");
  }
}
function showCart() {
  const cartList = document.getElementById('cart-items');
  if (cartList) {
    cartList.style.display = cartList.style.display === 'none' ? 'block' : 'none';
  }
}
function toggleCart() {
  const cartList = document.getElementById('cart-items');
  if (cartList) {
    cartList.style.display = cartList.style.display === 'none' ? 'block' : 'none';
  }
}
function init() {
  const cartList = document.getElementById('cart-items');
  if (cartList) {
    cartList.style.display = 'none';
  }
  const checkoutButton = document.getElementById('checkout-button');
  if (checkoutButton) {
    checkoutButton.addEventListener('click', checkout);
  }
  const clearButton = document.getElementById('clear-button');
  if (clearButton) {
    clearButton.addEventListener('click', clearCart);
  }
}
document.addEventListener('DOMContentLoaded', init);
function addToCart(course, price) {
  cart.push({ course, price });
  alert(`${course} added to cart!`);
  updateCartDisplay();
}
function updateCartDisplay() {
    const cartList = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total');
    if (!cartList || !totalDisplay) return;
    
    cartList.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const li = document.createElement('li');
        li.textContent = `${item.course} - KES ${item.price}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromCart(index);
        li.appendChild(removeButton);
        cartList.appendChild(li);
    });
    
    totalDisplay.textContent = `Total: KES ${total}`;
    }
function removeFromCart(index) {
    if (index >= 0 && index < cart.length) {
        const removedItem = cart.splice(index, 1);
        alert(`${removedItem[0].course} removed from cart!`);
        updateCartDisplay();
    } else {
        alert("Invalid item index.");
    }
}

function showCart() {
    const cartList = document.getElementById('cart-items');
    if (cartList) {
        cartList.style.display = cartList.style.display === 'none' ? 'block' : 'none';
    }
}
function toggleCart() {
    const cartList = document.getElementById('cart-items');
    if (cartList) {
        cartList.style.display = cartList.style.display === 'none' ? 'block' : 'none';
    }
}
function init() {
    const cartList = document.getElementById('cart-items');
    if (cartList) {
        cartList.style.display = 'none';
    }
    const checkoutButton = document.getElementById('checkout-button');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', checkout);
    }
    const clearButton = document.getElementById('clear-button');
    if (clearButton) {
        clearButton.addEventListener('click', clearCart);
    }
}
document.addEventListener('DOMContentLoaded', init);
function addToCart(course, price) {
  cart.push({ course, price });
  alert(`${course} added to cart!`);
  updateCartDisplay();
}
function updateCartDisplay() {
    const cartList = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total');
    if (!cartList || !totalDisplay) return;
    
    cartList.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const li = document.createElement('li');
        li.textContent = `${item.course} - KES ${item.price}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromCart(index);
        li.appendChild(removeButton);
        cartList.appendChild(li);
    });
    
    totalDisplay.textContent = `Total: KES ${total}`;
}
function removeFromCart(index) {
    if (index >= 0 && index < cart.length) {
        const removedItem = cart.splice(index, 1);
        alert(`${removedItem[0].course} removed from cart!`);
        updateCartDisplay();
    } else {
        alert("Invalid item index.");
    }
}
function showCart() {
    const cartList = document.getElementById('cart-items');
    if (cartList) {
        cartList.style.display = cartList.style.display === 'none' ? 'block' : 'none';
    }
}
function toggleCart() {
    const cartList = document.getElementById('cart-items');
    if (cartList) {
        cartList.style.display = cartList.style.display === 'none' ? 'block' : 'none';
    }
}
function init() {
    const cartList = document.getElementById('cart-items');
    if (cartList) {
        cartList.style.display = 'none';
    }
    const checkoutButton = document.getElementById('checkout-button');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', checkout);
    }
    const clearButton = document.getElementById('clear-button');
    if (clearButton) {
        clearButton.addEventListener('click', clearCart);
    }
}
document.addEventListener('DOMContentLoaded', init);
function addToCart(course, price) {
  cart.push({ course, price });
  alert(`${course} added to cart!`);
  updateCartDisplay();
}

function updateCartDisplay() {
    const cartList = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total');
    if (!cartList || !totalDisplay) return;
    
    cartList.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const li = document.createElement('li');
        li.textContent = `${item.course} - KES ${item.price}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromCart(index);
        li.appendChild(removeButton);
        cartList.appendChild(li);
    });
    
    totalDisplay.textContent = `Total: KES ${total}`;
}
function removeFromCart(index) {
    if (index >= 0 && index < cart.length) {
        const removedItem = cart.splice(index, 1);
        alert(`${removedItem[0].course} removed from cart!`);
        updateCartDisplay();
    } else {
        alert("Invalid item index.");
    }
}
function showCart() {
    const cartList = document.getElementById('cart-items');
    if (cartList) {
        cartList.style.display = cartList.style.display === 'none' ? 'block' : 'none';
    }
}   
function toggleCart() {
    const cartList = document.getElementById('cart-items');
    if (cartList) {
        cartList.style.display = cartList.style.display === 'none' ? 'block' : 'none';
    }
}
function init() {
    const cartList = document.getElementById('cart-items');
    if (cartList) {
        cartList.style.display = 'none';
    }
    const checkoutButton = document.getElementById('checkout-button');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', checkout);
    }
    const clearButton = document.getElementById('clear-button');
    if (clearButton) {
        clearButton.addEventListener('click', clearCart);
    }
}
document.addEventListener('DOMContentLoaded', init);
function addToCart(course, price) {
  cart.push({ course, price });
  alert(`${course} added to cart!`);
  updateCartDisplay();
}
function updateCartDisplay() {
    const cartList = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total');
    if (!cartList || !totalDisplay) return;
    
    cartList.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const li = document.createElement('li');
        li.textContent = `${item.course} - KES ${item.price}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromCart(index);
        li.appendChild(removeButton);
        cartList.appendChild(li);
    });
    
    totalDisplay.textContent = `Total: KES ${total}`;
}
function removeFromCart(index) {
    if (index >= 0 && index < cart.length) {
        const removedItem = cart.splice(index, 1);
        alert(`${removedItem[0].course} removed from cart!`);
        updateCartDisplay();
    } else {
        alert("Invalid item index.");
    }
}
function showCart() {
    const cartList = document.getElementById('cart-items');
    if (cartList) {
        cartList.style.display = cartList.style.display === 'none' ? 'block' : 'none';
    }
}
function toggleCart() {
    const cartList = document.getElementById('cart-items');
    if (cartList) {
        cartList.style.display = cartList.style.display === 'none' ? 'block' : 'none';
    }
}
function init() {
    const cartList = document.getElementById('cart-items');
    if (cartList) {
        cartList.style.display = 'none';
    }
    const checkoutButton = document.getElementById('checkout-button');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', checkout);
    }
    const clearButton = document.getElementById('clear-button');
    if (clearButton) {
        clearButton.addEventListener('click', clearCart);
    }
}
document.addEventListener('DOMContentLoaded', init);
function addToCart(course, price) {
  cart.push({ course, price });
  alert(`${course} added to cart!`);
  updateCartDisplay();
}
function updateCartDisplay() {
    const cartList = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total');
    if (!cartList || !totalDisplay) return;
    
    cartList.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const li = document.createElement('li');
        li.textContent = `${item.course} - KES ${item.price}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromCart(index);
        li.appendChild(removeButton);
        cartList.appendChild(li);
    });
    
    totalDisplay.textContent = `Total: KES ${total}`;
}
function removeFromCart(index) {
    if (index >= 0 && index < cart.length) {
        const removedItem = cart.splice(index, 1);
        alert(`${removedItem[0].course} removed from cart!`);
        updateCartDisplay();
    } else {
        alert("Invalid item index.");
    }
}
function showCart() {
    const cartList = document.getElementById('cart-items');
    if (cartList) {
        cartList.style.display = cartList.style.display === 'none' ? 'block' : 'none';
    }
}
function toggleCart() {
    const cartList = document.getElementById('cart-items');
    if (cartList) {
        cartList.style.display = cartList.style.display === 'none' ? 'block' : 'none';
    }
}
function init() {
    const cartList = document.getElementById('cart-items');
    if (cartList) {
        cartList.style.display = 'none';
    }
    const checkoutButton = document.getElementById('checkout-button');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', checkout);
    }
    const clearButton = document.getElementById('clear-button');
    if (clearButton) {
        clearButton.addEventListener('click', clearCart);
    }
} 
document.addEventListener('DOMContentLoaded', init);
function addToCart(course, price) {
  cart.push({ course, price });
  alert(`${course} added to cart!`);
  updateCartDisplay();
}
function updateCartDisplay() {
    const cartList = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total');
    if (!cartList || !totalDisplay) return;
    
    cartList.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const li = document.createElement('li');
        li.textContent = `${item.course} - KES ${item.price}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromCart(index);
        li.appendChild(removeButton);
        cartList.appendChild(li);
    });
    
    totalDisplay.textContent = `Total: KES ${total}`;
}
function removeFromCart(index) {
    if (index >= 0 && index < cart.length) {
        const removedItem = cart.splice(index, 1);
        alert(`${removedItem[0].course} removed from cart!`);
        updateCartDisplay();
    } else {
        alert("Invalid item index.");
    }
}
function showCart() {
    const cartList = document.getElementById('cart-items');
    if (cartList) {
        cartList.style.display = cartList.style.display === 'none' ? 'block' : 'none';
    }
}
function toggleCart() {
    const cartList = document.getElementById('cart-items');
    if (cartList) {
        cartList.style.display = cartList.style.display === 'none' ? 'block' : 'none';
    }
}
function init() {
    const cartList = document.getElementById('cart-items');
    if (cartList) {
        cartList.style.display = 'none';
    }
    const checkoutButton = document.getElementById('checkout-button');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', checkout);
    }
    const clearButton = document.getElementById('clear-button');
    if (clearButton) {
        clearButton.addEventListener('click', clearCart);
    }
}
document.addEventListener('DOMContentLoaded', init);
function addToCart(course, price) {
  cart.push({ course, price });
  alert(`${course} added to cart!`);
  updateCartDisplay();
} 
function updateCartDisplay() {
    const cartList = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total');
    if (!cartList || !totalDisplay) return;
    
    cartList.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const li = document.createElement('li');
        li.textContent = `${item.course} - KES ${item.price}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromCart(index);
        li.appendChild(removeButton);
        cartList.appendChild(li);
    });
    
    totalDisplay.textContent = `Total: KES ${total}`;
}
function removeFromCart(index) {
    if (index >= 0 && index < cart.length) {
        const removedItem = cart.splice(index, 1);
        alert(`${removedItem[0].course} removed from cart!`);
        updateCartDisplay();
    } else {
        alert("Invalid item index.");
    }
}
function showCart() {
    const cartList = document.getElementById('cart-items');
    if (cartList) {
        cartList.style.display = cartList.style.display === 'none' ? 'block' : 'none';
    }
}
function toggleCart() {
    const cartList = document.getElementById('cart-items');
    if (cartList) {
        cartList.style.display = cartList.style.display === 'none' ? 'block' : 'none';
    }
}
function init() {
    const cartList = document.getElementById('cart-items');
    if (cartList) {
        cartList.style.display = 'none';
    }
    const checkoutButton = document.getElementById('checkout-button');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', checkout);
    }
    const clearButton = document.getElementById('clear-button');
    if (clearButton) {
        clearButton.addEventListener('click', clearCart);
    }
}
document.addEventListener('DOMContentLoaded', init);
function addToCart(course, price) {
  cart.push({ course, price });
  alert(`${course} added to cart!`);
  updateCartDisplay();
}
function updateCartDisplay() {
    const cartList = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total');
    if (!cartList || !totalDisplay) return;
    
    cartList.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const li = document.createElement('li');
        li.textContent = `${item.course} - KES ${item.price}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromCart(index);
        li.appendChild(removeButton);
        cartList.appendChild(li);
    });
    
    totalDisplay.textContent = `Total: KES ${total}`;
}
function removeFromCart(index) {
    if (index >= 0 && index < cart.length) {
        const removedItem = cart.splice(index, 1);
        alert(`${removedItem[0].course} removed from cart!`);
        updateCartDisplay();
    } else {
        alert("Invalid item index.");
    }
}
function showCart() {
    const cartList = document.getElementById('cart-items');
    if (cartList) {
        cartList.style.display = cartList.style.display === 'none' ? 'block' : 'none';
    }
}
function toggleCart() {
    const cartList = document.getElementById('cart-items');
    if (cartList) {
        cartList.style.display = cartList.style.display === 'none' ? 'block' : 'none';
    }
}
function init() {
    const cartList = document.getElementById('cart-items');
    if (cartList) {
        cartList.style.display = 'none';
    }
    const checkoutButton = document.getElementById('checkout-button');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', checkout);
    }
    const clearButton = document.getElementById('clear-button');
    if (clearButton) {
        clearButton.addEventListener('click', clearCart);
    }
}
