import { useCart } from "../context/CartContext";
import { UseTitle } from "../hooks/UseTitle";
import { CartCard } from "../components";
import { useContext } from "react";

export const Cart = () => {
    const { total, cartList } = useCart();
    UseTitle("Cart");

    return (
        <main>
            <section className="cart">
                <h1>Cart items: {cartList.length} / ${total}</h1>
                {cartList.map((product) => (
                    <CartCard key={product.id} product={product} />
                ))}
            </section>
        </main>
    )
}
