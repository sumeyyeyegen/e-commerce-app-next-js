import { useEffect, useState } from 'react';
import storage from '../localStorage';
//localS. tanım varsa onu al yoksa bos array tanımla.

const getArr = storage.get("favorites") || [];

const useFavorites: any = () => {
  const [favorites, setFavorites] = useState<any[]>([])
  const [allFavorites, setAllFavorites] = useState<any[]>(getArr)
  const [localStorageData, setLocalStorageData] = useState<any[]>([])

  const findProductIndexById = (list: Array<any>, id: number) => {
    if (list.length > 0) {
      const index: any = list.findIndex((item) => Number(item.id) === Number(id));
      return index;
    } else {
      return -1
    }
  };


  const addToFavoriteList = (data: any) => {
    console.log(data);
    setAllFavorites((favs: any) => [...favs, data]);
    //Ürünün sepette olup olmamasını kontrol ediyor
    let idx: any = findProductIndexById(allFavorites, Number(data.id))

    if (idx === -1) {
      setFavorites((favorites: any) => [...favorites, data]);
      setAllFavorites((favs: any) => [...favs, data]);
    } else {

      const filtered = allFavorites.filter(
        (item) => Number(item.id) !== Number(data.id)
      );

      setAllFavorites([...filtered]);
    }
  }

  const emptyFavorites = () => {
    setFavorites([]);
  };

  useEffect(() => {
    if (favorites.length > 0) {
      let idx: any = findProductIndexById(allFavorites, Number(favorites[0].id))

      if (idx === -1) {
        let data: any = [];
        getArr !== undefined && getArr?.length > 0 && getArr.map((item: any) => data.push(item))
        favorites.length > 0 && data.push(favorites[0]);

        storage.set("favorites", [...data]);
      } else {
        storage.set("favorites", [...allFavorites]);
      }
    } else {
      storage.set("favorites", allFavorites);
    }
  }, [favorites, allFavorites]);

  return {
    favorites,
    addToFavoriteList,
    emptyFavorites
  }
};

export default useFavorites;