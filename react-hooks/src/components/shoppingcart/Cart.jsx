import React, { useState } from "react";

const Cart = () => {
  const fruitsList = [
    { id: 1, name: "Apple", price: 0.99, quantity: 0 },
    { id: 2, name: "Banana", price: 0.49, quantity: 0 },
    { id: 3, name: "Mango", price: 1.99, quantity: 0 },
    { id: 4, name: "Strawberry", price: 2.49, quantity: 0 },
  ];

  const [fruits, setFruits] = useState(fruitsList);

  const increment = (id) => {
    setFruits(
      fruits.map((fruit) =>
        fruit.id === id ? { ...fruit, quantity: fruit.quantity + 1 } : fruit
      )
    );
  };

  const decrement = (id) => {
    setFruits(
      fruits.map((fruit) =>
        fruit.id === id && fruit.quantity > 0
          ? { ...fruit, quantity: fruit.quantity - 1 }
          : fruit
      )
    );
  };

  const checkout = () => (window.location.href = "/checkout");

  const emptyCart = () => {
    setFruits(fruits.map((fruit) => ({ ...fruit, quantity: 0 })));
  };
  const totalPrice = fruits.reduce(
    (total, fruit) => total + fruit.price * fruit.quantity,
    0
  );
  return (
    <div style={{ alignItems: "center" }}>
      <table
        border="1 solid"
        style={{
          width: "60%",
          margin: "auto",
          textAlign: "center",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {fruits.map((fruit) => (
            <tr key={fruit.id}>
              <td>{fruit.name}</td>
              <td>{fruit.price.toFixed(2)}</td>
              <td>
                <button onClick={()=> decrement(fruit.id)}>-</button>
                {fruit.quantity}
                <button onClick={()=>increment(fruit.id)}>+</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>
        Total Price: ${totalPrice.toFixed(2)}
      </h2>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button onClick={checkout}>Checkout</button>
        <button onClick={emptyCart}>Empty Cart</button>
      </div>
    </div>
  );
};

export default Cart;
