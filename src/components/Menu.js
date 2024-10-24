import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Menu.css'; // Assurez-vous de créer et d'importer le fichier de style Menu.css

const Menu = () => {
    const { addToCart } = useContext(CartContext);

    // Exemple de données de plats pour chaque section
    const sections = [
        {
            title: 'Appetizers',
            dishes: [
                { id: 1, name: 'Garlic Bread', price: 2500, img: 'https://www.simplyrecipes.com/thmb/-yFt9YmNPJe3hubNxM0i6NY2RbU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Garlic-Bread-METHOD-2-3-1c5f5cfa8bf6408c84c0596eea83f8e8.jpg' },
                { id: 2, name: 'Caprese Salad', price: 2000, img: 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/07/Caprese-Salad-2-2.jpg' },
                { id: 3, name: 'Bruschetta', price: 4000, img: 'https://www.simplyrecipes.com/thmb/IH1JTK26k3y4oVHVu8XeFflf33E=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Bruschetta-Tomato-Basil-LEAD-3-772fd11de4144552a485af87f7033bf8.jpg' },
                { id: 4, name: 'Stuffed Mushrooms', price: 3500, img: 'https://www.jocooks.com/wp-content/uploads/2012/05/stuffed-portobello-mushrooms-1-16.jpg' }
            ]
        },
        {
            title: 'Main Dishes',
            dishes: [
                { id: 5, name: 'Spaghetti Bolognese', price: 9000, img: 'https://www.vickery.tv/wp-content/uploads/2020/12/SMGD-Spaghetti-Bolognese.jpg' },
                { id: 6, name: 'Grilled Salmon', price: 12000, img: 'https://www.thecookierookie.com/wp-content/uploads/2023/05/grilled-salmon-recipe-2-768x960.jpg' },
                { id: 7, name: 'Chicken Parmesan', price: 8000, img: 'https://www.budgetbytes.com/wp-content/uploads/2024/04/Chicken-Parmesan-V1-768x1024.jpg' },
                { id: 8, name: 'Vegetable Stir-fry', price: 10000, img: 'https://therecipecritic.com/wp-content/uploads/2019/08/vegetable_stir_fry.jpg' }
            ]
        },
        {
            title: 'Desserts',
            dishes: [
                { id: 9, name: 'Chocolate Cake', price: 6000, img: 'https://scientificallysweet.com/wp-content/uploads/2023/06/IMG_7111-er-new-720x1080.jpg' },
                { id: 10, name: 'Cheesecake', price: 5000, img: 'https://image.jimcdn.com/app/cms/image/transf/dimension=2048x2048:format=jpg/path/sf51e3555eb28f2f2/image/i68b87aaa34115b10/version/1627902363/image.jpg' },
                { id: 11, name: 'Tiramisu', price: 4500, img: 'https://files.meilleurduchef.com/mdc/photo/recette/tiramisu-speculoos/tiramisu-speculoos-1200.jpg' },
                { id: 12, name: 'Fruit Tart', price: 3750, img: 'https://www.marcellinaincucina.com/wp-content/uploads/2017/09/mini-fruit-tarts-hero.jpg' }
            ]
        },
        {
            title: 'Drinks',
            dishes: [
                { id: 13, name: 'Iced Tea', price: 3000, img: 'https://www.errenskitchen.com/wp-content/uploads/2014/08/lemon-Iced-Tea2-e1528899924932-650x998.jpg' },
                { id: 14, name: 'Mojito', price: 7000, img: 'https://www.destinationcocktails.fr/wp-content/uploads/2019/11/Cocktail-mojito-1.jpg.webp' },
                { id: 15, name: 'Cappuccino', price: 5000, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Capuccino_Italy.jpg/280px-Capuccino_Italy.jpg' },
                { id: 16, name: 'Fresh Juice', price: 4000, img: 'https://media.istockphoto.com/id/487402642/photo/fresh-juice.jpg?s=1024x1024&w=is&k=20&c=-KnaAnncOTfyKWg7AVbRe6TKBhJnNn2AcKprVcZ82W0=' }
            ]
        }
    ];

    return (
        <div className="menu-container">
            {sections.map((section, index) => (
                <section key={index} className="menu-section">
                    <h2 className="section-title font-bold text-2xl text-center">{section.title}</h2>
                    <div className="food-cards">
                        {section.dishes.map((dish) => (
                            <div key={dish.id} className="food-card">
                                <img src={dish.img} alt={dish.name} className="food-img" />
                                <div className="food-info">
                                    <h3 className="food-name">{dish.name}</h3>
                                    <p className="food-price font-bold">{dish.price} FCFA</p>
                                    <button className="add-to-cart-btn" onClick={() => addToCart(dish)}>Ajouter au Panier</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
};

export default Menu;