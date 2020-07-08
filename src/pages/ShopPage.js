import React from 'react';
import {Route, useRouteMatch} from 'react-router-dom';
//import {ProductContext} from '../context/products';

// ********** components ********* //
//import CollectionPreview from '../components/CollectionPreview';
import CollectionOverview from '../components/CollectionOverwiev';
import CollectionPage from './CollectionPage';

const ShopPage = () => {

  const {path} = useRouteMatch()
  console.log(path)


   return (
         <section className='section'>
            <div className='shop-page'>
               <Route exact path={path} component={CollectionOverview}/>
               <Route path={`${path}/:collectionId`}  component={CollectionPage } />
              



               {/* {productData.map(item => (
                  <CollectionPreview key={item.id} {...item} />
               ))} */}
            </div>
         </section>
   )
};

export default ShopPage;
