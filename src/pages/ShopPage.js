import React from 'react';
import {ProductContext} from '../context/products';

// ********** components ********* //
import CollectionPreview from '../components/CollectionPreview';

const ShopPage = () => {

   const { productData } = React.useContext(ProductContext);

   return (
         <section className='section'>
            <div>
               {productData.map(item => (
                  <CollectionPreview key={item.id} {...item} />
               ))}
            </div>
         </section>
   )
};

export default ShopPage;
