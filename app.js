let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const product = event.target.dataset.product;
        const price = event.target.dataset.price;
        cart.push({ product, price });
        updateCart();
    });
});

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');

    cartCount.textContent = cart.length;

    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - $${item.price}`;
        cartItems.appendChild(li);
    });
}
