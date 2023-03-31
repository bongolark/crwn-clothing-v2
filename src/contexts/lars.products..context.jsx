import { createContext, useState, useEffect } from 'react';

import PRODUCT_DATA from '../shop-data.json';

export const ProductContext = createContext({
  productList: [],
});

export const ProductsProvider = ({ children }) => {
  const [productList, setProductList] = useState(PRODUCT_DATA);
  const value = { productList };

  console.log('setting product list')  
  console.log(productList)

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};
