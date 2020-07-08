import React from 'react';
import CollectionItem from '../components/CollectionItem';
import {useRouteMatch} from 'react-router-dom';
import {ProductContext} from '../context/products';


const CollectionPage = () => {
   const {params:{collectionId}} = useRouteMatch()
   const {productData} = React.useContext(ProductContext)

//console.log({params:{collectionId}})

   const tempCollection = productData.find(collection => collection.id === collectionId)
  
   const {title, items} = tempCollection

   return (
      <div className='collection-page'>
         <h2 className='title'>{title}</h2>
         <div className='items'>
            {items.map(item => < CollectionItem key={item.id}  item={item} /> )}

         </div>
         
      </div>
   )
}

export default CollectionPage;
