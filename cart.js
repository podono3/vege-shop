let cart = [];

// カートに追加
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    renderCart();
}

// カートを表示
function renderCart() {
    const list = document.getElementById("cart-list");
    list.innerHTML = "";

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ${item.price}円`;
        list.appendChild(li);
    });

    document.getElementById("total").textContent =
        cart.reduce((t, item) => t + item.price, 0) + "円";
}
