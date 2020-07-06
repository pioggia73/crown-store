import React from 'react';
import links from '../utils/links';
import {Link} from 'react-router-dom';


const HomePage = () => {
  
   return (
      <div className='section section-home'>
         {links.map(link => (
               <div className={`${link.className} home-container`} key={link.id}>
               <img src={link.image} alt={link.title}/>
               <Link to={link.path} className='main-link'>
               <h1>{link.title}</h1>
               </Link>
               </div>
               
         ))}
      </div>
   )
}

export default HomePage;
