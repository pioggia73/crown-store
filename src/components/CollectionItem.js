import React from 'react';
import {CartContext} from '../context/cart';

// ****** components ***** //
import CustomButton from '../components/CustomButton';

const CollectionItem = ({item}) => {

    const {addItem} = React.useContext(CartContext);
    const {name, price, imageUrl} = item;

   return  <>
            <div className='collection-item'>

                <div className='image'
                    style={{ backgroundImage: `url(${imageUrl})` }}
                />
                <div className='collection-footer'>
                    <span className='name'>{name}</span>
                    <span className='price'>${price}</span>
                </div>
                <CustomButton inverted onClick={() => addItem(item)}>add to cart</CustomButton>
            </div>
        </>
};

export default CollectionItem;