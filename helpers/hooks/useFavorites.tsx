import { useEffect, useState } from 'react';
//localS. tanım varsa onu al yoksa bos array tanımla.

const useFavorites: any = () => {
  const defaultFavorites: any = process.browser && typeof window !== "undefined" && localStorage.getItem('favorites') !== null && localStorage.getItem('favorites') !== undefined && localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites') || "") : [];

  const [favorites, setFavorites] = useState<any[]>(defaultFavorites)

  const addToFavoriteList = (data: any, findFavoriteItems: any) => {
    //Ürünün sepette olup olmamasını kontrol ediyor

    if (findFavoriteItems === undefined) {
      return setFavorites([...favorites, data]);
    } else {

      const filtered = favorites.filter(
        (item) => item.id !== findFavoriteItems.id
      );

      setFavorites([...filtered]);
    }
  }


  const emptyFavorites = () => {
    setFavorites([]);
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {

    console.log(defaultFavorites);

  }, [defaultFavorites])
  return {
    favorites,
    addToFavoriteList,
    emptyFavorites
  }
};

export default useFavorites;