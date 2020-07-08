import React from 'react';
import {ProductContext} from '../context/products';
import CollectionPreview from './CollectionPreview';

const CollectionOverwiev = () => {

   const {productData} = React.useContext(ProductContext);

   return (
      <div className='collections-overview'>
         {productData.map(item => (
            <CollectionPreview key={item.id} {...item} />
         ))}
      </div>
   )
}

export default CollectionOverwiev;
