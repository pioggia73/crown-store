import React from 'react';
import links from '../utils/links';
import {Link, useParams, useRouteMatch} from 'react-router-dom';
//import {ProductContext} from '../context/products';



const HomePage = ({path}) => {
//const {productData} = React.useContext(ProductContext)
//console.log(useParams())
let {collectionId} = useParams()
//let {path} = useRouteMatch()
console.log(collectionId)

  
   return (
      <div className='section section-home'>
         {links.map(link => (
               <div className={`${link.className} home-container`} key={link.id}>
               <img src={link.image} alt={link.title}/>
               <Link to= {link.linkUrl} className='main-link'>
               <h1>{link.title}</h1>
               <h2>shop now</h2>
               </Link>
               </div>
               
         ))}
      </div>
   )
}

export default HomePage;
