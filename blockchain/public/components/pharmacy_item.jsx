import React from 'react';

const PharmacyItem = ({product, buyAmount, updateValue}) => {
  return (
    <li className="product-card">
        <h1>{product.name}</h1>
        <h2>{product.amount}</h2>
        <input type="number" value={buyAmount} onChange={(e)=>{updateValue(product.name,e.target.value)}}/>
    </li>
  );
};

export default PharmacyItem;