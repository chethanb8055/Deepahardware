import React from "react";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeItem, setQty, clearCart, total } = useCart();

  const whatsappMessage = () => {
    if (!cart.items.length) return "#";
    const lines = cart.items.map(i => `${i.product.name} x ${i.qty} = ₹${i.product.price * i.qty}`);
    lines.push(`Total: ₹${total}`);
    lines.push("Please confirm availability & pickup/delivery details.");
    const text = encodeURIComponent(lines.join("\n"));
    const number = "91999XXXXXXX";
    return `https://wa.me/${number}?text=${text}`;
  };

  return (
    <div>
      <h2 className="h5 mb-3">Shopping Cart</h2>

      {cart.items.length === 0 ? (
        <div className="text-muted">Your cart is empty.</div>
      ) : (
        <div className="row g-3">
          <div className="col-md-8">
            {cart.items.map(i => (
              <div key={i.id} className="card mb-2 p-3 d-flex align-items-center">
                <div className="row g-2 align-items-center w-100">
                  <div className="col-auto">
                    <img src={i.product.image} alt={i.product.name} style={{ width: 80, height: 80, objectFit: 'contain' }} />
                  </div>
                  <div className="col">
                    <div className="fw-semibold">{i.product.name}</div>
                    <div className="small text-muted">₹{i.product.price} each</div>
                  </div>
                  <div className="col-auto d-flex align-items-center gap-2">
                    <button className="btn btn-sm btn-outline-secondary" onClick={() => setQty(i.id, i.qty - 1)}>-</button>
                    <div>{i.qty}</div>
                    <button className="btn btn-sm btn-outline-secondary" onClick={() => setQty(i.id, i.qty + 1)}>+</button>
                  </div>
                  <div className="col-auto text-end">
                    <div className="fw-bold">₹{i.product.price * i.qty}</div>
                    <button className="btn btn-sm btn-link text-danger" onClick={() => removeItem(i.id)}>Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-md-4">
            <div className="card p-3">
              <h6>Order Summary</h6>
              <div className="mt-2 mb-3 h5">Total: ₹{total}</div>
              <a href={whatsappMessage()} target="_blank" rel="noreferrer" className={`btn btn-success w-100 mb-2 ${cart.items.length ? '' : 'disabled'}`}>
                <i className="bi bi-whatsapp me-2"></i>Send on WhatsApp
              </a>
              <button onClick={clearCart} className="btn btn-outline-secondary w-100">Clear Cart</button>
              <p className="small text-muted mt-3">WhatsApp will open with a prefilled order message.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
