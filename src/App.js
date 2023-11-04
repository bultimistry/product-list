
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Filters from './components/Filters';
import ProductList from './components/ProductList';
import Pagination from './components/Pagination';
import { products as sampleProducts } from './data/products';

const AppContainer = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: #282c34;
  color: white;
  padding: 20px;
`;

const AppTitle = styled.h1`
  font-size: 2rem;
`;

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    
    setProducts(sampleProducts);
    setFilteredProducts(sampleProducts);
  }, []);

  const handleFilterChange = (category) => {
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
    setCurrentPage(1); // Reset to the first page after filtering.
  };

  const handleSortChange = (sortOption) => {
    const sorted = [...filteredProducts];
    if (sortOption === 'PriceLowToHigh') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'PriceHighToLow') {
      sorted.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(sorted);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <AppContainer>
      <AppHeader>
        <AppTitle>Product List</AppTitle>
      </AppHeader>
      <Filters
        categories={['All', 'electronics', 'culinury', 'Glasses', 'trolly & Bags', 'Books']}
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
      />
      <ProductList products={filteredProducts} currentPage={currentPage} productsPerPage={productsPerPage} />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredProducts.length / productsPerPage)}
        onPageChange={handlePageChange}
      />
    </AppContainer>
  );
}

export default App;
