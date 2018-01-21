import React from 'react';

const PharmacyItem = ({product}) => {
  return (
    <li>
      pharm item {product.name}
    </li>
  );
};

export default PharmacyItem;