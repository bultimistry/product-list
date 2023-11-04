
import React from 'react';
import styled, { keyframes} from 'styled-components';


const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  max-width: 300px;
  transition: background-color 0.3s;
  &:hover {
    transform: scale(1.05);
  }
  animation: ${fadeIn} 0.5s ease;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin: 10px 0;
`;

const Description = styled.p`
  font-size: 1rem;
  margin: 10px 0;
`;

const Price = styled.div`
  font-size: 1.25rem;
  color: #ff5722;
  margin-top: 10px;
`;

function ProductCard({ product }) {
  return (
    <Card>
      <Image src={product.image} alt={product.title} />
      <Title>{product.title}</Title>
      <Description>{product.description}</Description>
      <Price>${product.price}</Price>
    </Card>
  );
}

export default ProductCard;
