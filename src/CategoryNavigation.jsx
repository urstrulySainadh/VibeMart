// CategoryNavigation.jsx
import React from 'react';
import './assets/styles.css';
import logo from './logo.png'; 
export function CategoryNavigation({ onCategoryClick }) {
  // Static categories list
  const categories = ['Shirts', 'Pants', 'Accessories', 'Mobiles', 'Mobile Accessories'];
  const categories_pictures=['https://res.cloudinary.com/dru2bs0qd/image/upload/Shirt11_waozmd.jpg',
                             'https://res.cloudinary.com/dru2bs0qd/image/upload/Pant10_ges40m.jpg',
                             'https://res.cloudinary.com/dru2bs0qd/image/upload/TV5_mrrgz3.jpg',
                             'https://res.cloudinary.com/dru2bs0qd/image/upload/Mobile11_bl7hnn.jpg',
                             'https://res.cloudinary.com/dru2bs0qd/image/upload/MA1_mokxcp.jpg']

  return (
    <nav className="category-navigation">
      <ul className="category-list">
        {categories.map((category, index) => (
          <div key={index} className="category-pictures">
                <img
                  src={categories_pictures[index]} // Use the imported image
                  alt="Vibemart Logo"
                  className="category-picture" // Updated class name
                  onClick={() => onCategoryClick(category)}
                  onError={(e) => { e.target.src = 'fallback-logo.png'; }} // Fallback for image error
                 />
          <li
            key={index}
            className="category-item"
            onClick={() => onCategoryClick(category)} // Trigger the click handler on category click
           >
            {category}
          </li>
        </div>
           
        ))}
      </ul>
    </nav>
  );
}