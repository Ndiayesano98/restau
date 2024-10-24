// CartContext.js
import React, { createContext, useState } from 'react';

// Création du contexte du panier
export const CartContext = createContext();

export const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);

    // Ajouter un article au panier
    const addToCart = (item) => {
        const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
        if (existingItem) {
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
                )
            );
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    // Supprimer un article du panier
    const removeFromCart = (itemToRemove) => {
        const newCartItems = cartItems.filter((item) => item.id !== itemToRemove.id);
        setCartItems(newCartItems);
    };

    // Diminuer la quantité d'un article
    const decreaseQuantity = (itemToDecrease) => {
        const existingItem = cartItems.find((cartItem) => cartItem.id === itemToDecrease.id);
        if (existingItem && existingItem.quantity > 1) {
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem.id === itemToDecrease.id
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                )
            );
        } else {
            // Si la quantité est 1, on supprime l'article du panier
            removeFromCart(itemToDecrease);
        }
    };

    // Vider le panier
    const clearCart = () => {
        setCartItems([]);
    };

    // Fournir les valeurs du contexte aux composants enfants
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, decreaseQuantity, clearCart }}>
            {props.children}
        </CartContext.Provider>
    );
};
