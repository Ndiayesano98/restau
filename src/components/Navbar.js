import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Importation de l'icône de panier

const Navbar = () => {
    return (
        <nav className="bg-blend-lighten p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-lg font-bold flex items-center">
                    <img src="https://i.pinimg.com/enabled_hi/564x/b1/ce/09/b1ce094d7b994f466fa81cca4b1b1d20.jpg" alt="Restaurant Logo" className="w-20 h-12 mr-4" />
                
                </Link>
                <div className="flex items-center">
                    <Link to="/" className="text-black text-xl font-bold hover:text-red-600 mx-2">Home</Link>
                    
                    <Link to="/login" className="text-black text-xl font-bold hover:text-red-600 mx-2">Login</Link>
                    <Link to="/Menu" className="text-black text-xl font-bold hover:text-red-600 mx-2">Menu</Link>
                    <Link to="/Contact" className="text-black text-xl font-bold hover:text-red-600 mx-2">Contact</Link>
                    <Link to="/cart" className="text-black text-xl font-bold hover:text-red-600 mx-2">
                        <FaShoppingCart /> {/* Utilisation de l'icône de panier */}
                    </Link> {/* Fermez cette balise */}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
