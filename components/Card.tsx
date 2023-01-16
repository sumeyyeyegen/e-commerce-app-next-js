import React, { useEffect, useState } from 'react'
import { IconButton, CardMedia, CardContent, CardActions } from '@mui/material';
import { Favorite, ShoppingBasket } from '@mui/icons-material';
import Link from 'next/link';
import useBasket from '../helpers/hooks/useBasket';
import useFavorites from '../helpers/hooks/useFavorites';

const CardComponent = ({ item }: any) => {
  const { addToBasket, basketItems } = useBasket();
  const { addToFavoriteList, favorites } = useFavorites();
  const [findFavorite, setFindFavorite] = useState()

  const findBasketItems = basketItems.findIndex(
    (item: any) => item.id === item.id
  );

  // useEffect(() => {
  //   alert(JSON.stringify(favorites))
  // }, [])
  return (
    <div className='card rounded'>
      <div className='position-relative'>
        <CardMedia
          component="img"
          height="194"
          className='rounded-top'
          image={item.image}
          alt={`product image ${item.id}`}
        />
        <IconButton aria-label="add to favorites" className={`favorite-button ${findFavorite !== undefined ? "active" : ""}`} onClick={() => addToFavoriteList(item)}>
          <Favorite />
        </IconButton>
      </div>
      <CardContent className='w-100'>
        <div>
          <Link href={`/products/${item.id}`}>
            <h4 className='text-capitalize'>{item.title}</h4>
          </Link>
          <span className='text-capitalize'>{item.description}</span>
        </div>

      </CardContent>
      <CardActions disableSpacing className='d-flex justify-content-between'>
        <h3>
          {item.price}₺
        </h3>
        <IconButton aria-label="basket" className='basket-button icon' onClick={() => addToBasket(item, findBasketItems)}>
          <ShoppingBasket />
        </IconButton>
      </CardActions>
    </div >
  )
}

export default CardComponent