import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Home.css';


const Home = () => {
    const { addToCart } = useContext(CartContext);

    const dishes = [
        { id: 1, name: 'Cuisine italienne', price: 4800 , img: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/3/21/0/fnd_pasta-istock.jpg.rend.hgtvcom.616.462.suffix/1490188710731.jpeg' },
        { id: 2, name: 'Pizza', price: 5500, img: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*974FiNntJlUcXCsn8OkjSw.jpeg' },
        { id: 3, name: 'Sushi', price: 6500 , img: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*-mMPgdE5rr1eJQXksCkftQ.jpeg' },
        { id: 4, name: 'Tacos', price: 5000, img: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*lsVGqLgNwrkQxwaIHaCn9Q.jpeg' }
    ];


    const desserts = [
        { id: 1, name: 'Pasta', price:4500 , img: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*yGuJWLHLklGcEe5_6_psrw.jpeg' },
        { id: 2, name: 'Burgers', price:3000, img: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*BCags_mpJa3yMQ-Fq6NonA.jpeg' },
        { id: 3, name: 'Curry', price:6000 , img: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*7U81RxPHmfSzyFgk8_Qayw.jpeg' },
        { id: 4, name: 'Dim Sum', price:2500, img: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*qRLhJ9gorazL0M35jCs7qg.jpeg' }
    ];



    return (
        <div className="home-container">
            <header className="hero-section">
                <div className="hero-content">
                    <h1>BIENVENUE CHEZ CHEF PII FOOD</h1>
                    <p>Découvrez des plats délicieux et un excellent service
                    </p>
                </div>
            </header>

            <section className="popular-food-section">
                <h2 className="section-title font-bold text-2xl">Populaire Food</h2>
                <div className="food-cards">
                    {dishes.map((dish) => (
                        <div key={dish.id} className="food-card">
                            <img src={dish.img} alt={dish.name} className="food-img" />
                            <div className="food-info">
                                <h3 className="food-name">{dish.name}</h3>
                                <p className="food-price text-xl font-bold">{dish.price} FCFA </p>
                                <button className="add-to-cart-btn font-bold" onClick={() => addToCart(dish)}>Ajouter au Panier</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

          
            <section className="popular-food-section">
                <h2 className="section-title font-bold text-2xl">Populaire Food</h2>
                <div className="food-cards">
                    {desserts.map((dessert) => (
                        <div key={dessert.id} className="food-card">
                            <img src={dessert.img} alt={dessert.name} className="food-img" />
                            <div className="food-info">
                                <h3 className="food-name">{dessert.name}</h3>
                                <p className="food-price text-xl font-bold">{dessert.price} FCFA </p>
                                <button className="add-to-cart-btn font-bold" onClick={() => addToCart(dessert)}>Ajouter au Panier</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            <footer className="footer">
               
                <p class="text-xl font-bold">&copy; CHEF PII FOOD. All rights reserved.</p>
            
            </footer>
        </div>
    );
};

export default Home;

