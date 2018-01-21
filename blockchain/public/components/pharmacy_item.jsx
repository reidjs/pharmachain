import React from 'react';

const PharmacyItem = ({path, product, buyAmount, updateValue}) => {
  let onBuyerPage = false;
  if (path === "/pharmacy") onBuyerPage = true;
  let showValue;
  onBuyerPage ? (showValue = product.amount) : (showValue = product.buyAmount);
  return (
    <li className="product-card">
      <img src={product.img}/>
      <h1>{product.name}</h1>
      <h2>{showValue}</h2>
      {onBuyerPage &&
        <input type="number" value={buyAmount} onChange={(e)=>{updateValue(product.name,e.target.value)}}/>
      }
    </li>
  );
};

export default PharmacyItem;