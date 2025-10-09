let cart = {};

function renderCart() {
  const listContainer = document.querySelector(".list-items");
  listContainer.innerHTML = "";

  let total = 0;

  for (let key in cart) {
    const item = cart[key];
    total += item.price * item.quantity;

    const div = document.createElement("div");
    div.classList.add("cart-row");

    div.innerHTML = `
      <span class="cart-name">${item.name}</span>
      <div class="controls">
        <button onclick="decreaseQty('${key}')">-</button>
        <span>${item.quantity}</span>
        <button onclick="increaseQty('${key}')">+</button>
      </div>
      <span class="cart-subtotal">$${(item.price * item.quantity).toFixed(2)}</span>
    `;

    listContainer.appendChild(div);
  }

  document.querySelector(".total").innerHTML =
    "<strong>Total Amount:</strong> $" + total.toFixed(2);
}

function addToCart(name, price, btn) {
  if (!cart[name]) {
    cart[name] = { name, price: parseFloat(price), quantity: 1 };
    // Change button text → Remove
    btn.textContent = "Remove";
    btn.classList.add("remove-btn");
  } else {
    // Item already in cart → remove it
    delete cart[name];
    // Change button back → Add
    btn.textContent = "Add";
    btn.classList.remove("remove-btn");
  }
  renderCart();
}

function increaseQty(name) {
  cart[name].quantity++;
  renderCart();
}

function decreaseQty(name) {
  if (cart[name].quantity > 1) {
    cart[name].quantity--;
  } else {
    delete cart[name];

    // Also reset left-side button text back to "Add"
    const serviceBtn = document.querySelector(
      `.service-item[data-name="${name}"] .add-btn`
    );
    if (serviceBtn) {
      serviceBtn.textContent = "+";
      serviceBtn.classList.remove("remove-btn");
    }
  }
  renderCart();
}

// Attach click event to all add and remove buttons
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".add-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const service = btn.closest(".service-item");
      const name = service.dataset.name;
      const price = service.dataset.price;5
      addToCart(name, price, btn);
    });
  });

  // Booking confirmation (unchanged)
  document.querySelector(".btn-primary").addEventListener("click", () => {
    const name = document.querySelector(".book-now input[type='text']").value;
    const email = document.querySelector(".book-now input[type='email']").value;
    const phone = document.querySelector(".book-now input[type='tel']").value;

    if (!name || !email || !phone) {
      alert("Please fill all fields before booking.");
      return;
    }

    if (Object.keys(cart).length === 0) {
      alert("Please add at least one service to cart.");
      return;
    }

    const orders = [];
    let total = 0;
        // Booking summary
        let summary = "<h3>Booking Summary:</h3><ul>\n\n";
    for (let key in cart) {
      let item = cart[key];
          // summary += `<li>${item.name} - ${item.quantity} x $${item.price} = $${(
          //     item.price * item.quantity).toFixed(2)}</li>\n`;
          // }                                                                    
      const itemTotal = item.price * item.quantity;
      total += itemTotal;

      orders.push({
        name: item.name,
        quantity: item.quantity,
        price: itemTotal.toFixed(2),
            image_url: item.image || "https://via.placeholder.com/64", // fallback image
      });
    }
          const shipping = 0.00;
          const tax = 0.00;
    const grandTotal = (total + shipping + tax).toFixed(2);

          const order_id = "ORD" + Date.now(); // simple unique ID
        // summary += `\n</ul><p><strong>Total:</strong> $$ {document.querySelector(".total").innerText.split("$")[1]}</p>`;
        // summary += `\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`;
        // alert(summary); // Show confirmation (you can later send this to backend)
        emailjs.send("service_ob9nda8", "template_4rhwd4l", {
            order_id: order_id,
            name: name,
            email: email,
            phone: phone,
            orders: orders,
        cost: {
          shipping: shipping.toFixed(2),
          tax: tax.toFixed(2),
          total: grandTotal,
            }
      })
      .then(() => {
        alert("✅ Booking confirmed! Order details sent to your email.");
      })
      .catch((err) => {
        console.error("Failed:", err);
        alert("❌ Booking failed, please try again.");
      });
  });
});
