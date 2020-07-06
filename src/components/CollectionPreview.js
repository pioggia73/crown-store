import React from 'react';
// *********** components **********//
import CollectionItem from './CollectionItem';

const CollectionPreview = ({title, items}) => {
   
   return (
      <>
         <div className='collection-preview'>
            <h2>{title}</h2>
            <div className='preview'>
               {items.filter((item, index) => index < 4)
               .map((item) => (
                  <CollectionItem key={item.id} item = {item} />
               ))}
            </div>
         </div>
     </>
   )
};

export default CollectionPreview;