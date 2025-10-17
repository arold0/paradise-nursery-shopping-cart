import { useState } from 'react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import './ProductListingPage.css';

function ProductListingPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="product-listing-page">
      <Header />
      <div className="container">
        <h1 className="page-title">Our Plants</h1>
        
        <div className="category-filter">
          <button 
            className={`category-btn ${selectedCategory === 'All' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('All')}
          >
            All Plants
          </button>
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductListingPage;
