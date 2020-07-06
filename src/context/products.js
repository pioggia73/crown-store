import React from 'react';
import productData from '../utils/productData';

const ProductContext = React.createContext();

function ProductProvider ({ children }) {

   return   <ProductContext.Provider value={{ productData }}>
               {children}
            </ProductContext.Provider>
};

export { ProductContext, ProductProvider };