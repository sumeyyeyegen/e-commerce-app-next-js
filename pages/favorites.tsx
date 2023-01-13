import React from 'react'
import useFavorites from '../helpers/hooks/useFavorites';

const Favorites = () => {
  const { emptyFavorites, favorites } = useFavorites();
  return (
    <div>
      {
        favorites.length > 0 ? favorites.map((item: any) => {
          return <div key={item.id}>
            {item.id}
          </div>
        }) : "Favori listesi boş"
      }
    </div>
  )
}

export default Favorites