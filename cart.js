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

// 数量を増やす
function incrase(index) {
    cart[index].quantity++;
    renderCart();
}

// 数量を減らす
function decrease(index) {
    cart[index].quantity--;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
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
        const divName = document.createElement("div");
        divName.textContent = `${item.name} × `;
        const divQuntity = document.createElement("div");
        divQuntity.className = "quantity-controls";
        const btnIncrase = document.createElement("button");
        btnIncrase.textContent = "+";
        btnIncrase.onclick = () => incrase(cart.indexOf(item));
        const btnDecrease = document.createElement("button");
        btnDecrease.textContent = "-";
        btnDecrease.onclick = () => decrease(cart.indexOf(item));
        const spanQuantity = document.createElement("span");
        spanQuantity.textContent = item.quantity;
        divQuntity.appendChild(btnDecrease);
        divQuntity.appendChild(spanQuantity);
        divQuntity.appendChild(btnIncrase);

        const divPrice = document.createElement("div");
        divPrice.className = "price";
        li.appendChild(divName);
        li.appendChild(divQuntity);
        divPrice.textContent = (item.price * item.quantity) + "円";
        li.appendChild(divPrice);

        total += item.price * item.quantity;

        list.appendChild(li);
    });

    document.getElementById("total").textContent = total + "円";
}
