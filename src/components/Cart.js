import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cartItems, removeFromCart, clearCart, decreaseQuantity } = useContext(CartContext);

    // Calculer le prix total des articles dans le panier
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold mb-4">PANIER</h2>
            {cartItems.length === 0 ? (
                <p className="text-2xl font-bold">VOTRE PANIER EST VIDE</p>
            ) : (
                <div>
                    <table className="min-w-full bg-blend-lighten border border-gray-300">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b border-gray-300 font-bold">Item</th>
                                <th className="py-2 px-4 border-b border-gray-300 font-bold">Price</th>
                                <th className="py-2 px-4 border-b border-gray-300 font-bold">Quantity</th>
                                <th className="py-2 px-4 border-b border-gray-300 font-bold">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.id} className="text-center">
                                    <td className="py-2 px-4 border-b border-gray-300 font-bold">{item.name}</td>
                                    <td className="py-2 px-4 border-b border-gray-300 font-bold">{item.price.toFixed(2)} €</td>
                                    <td className="py-2 px-4 border-b border-gray-300 font-bold">{item.quantity}</td>
                                    <td className="py-2 px-4 border-b border-gray-300 font-bold space-x-2">
                                        <button 
                                            onClick={() => decreaseQuantity(item)} 
                                            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700"
                                        >
                                            -
                                        </button>
                                        <button 
                                            onClick={() => removeFromCart(item)} 
                                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="mt-4 flex justify-between items-center">
                        <p className="text-xl font-bold">Total: {getTotalPrice()} FCFA</p>
                        <div>
                            <button 
                                onClick={clearCart} 
                                className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-600 mr-2"
                            >
                                Clear Cart
                            </button>
                            <button 
                                onClick={() => alert('Commande confirmée!')} 
                                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-400"
                            >
                                Confirmer ma commande
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
