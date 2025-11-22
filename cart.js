let cart = [];

// カートに追加
function addToCart(id) {
    const product = products.find(p => p.id === id);

    // すでにカートにあるかチェック
    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity++; // 数量を増やす
    } else {
        cart.push({ ...product, quantity: 1 }); // 初回は quantity: 1
    }

    renderCart();
}

// カート表示
function renderCart() {
    const list = document.getElementById("cart-list");
    list.innerHTML = "";

    let total = 0;

    cart.forEach(item => {
        const li = document.createElement("li");

        li.textContent = `${item.name} - ${item.price}円 ×${item.quantity}`;

        total += item.price * item.quantity;

        list.appendChild(li);
    });

    document.getElementById("total").textContent = total + "円";
}
