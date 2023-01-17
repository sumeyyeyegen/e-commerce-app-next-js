import { useEffect, useState } from 'react';
import storage from '../localStorage';
//localS. tanım varsa onu al yoksa bos array tanımla.
const useFavorites: any = () => {
  const getArr = storage.get("favorites")
  const [favorites, setFavorites] = useState<any[]>([])
  const [allFavorites, setAllFavorites] = useState<any[]>(getArr);
  const [indx, setIndx] = useState()

  const findProductIndexById = (list: Array<any>, id: number) => {
    // if (list?.length > 0) {
    const index: any = list.findIndex((item) => Number(item.id) === Number(id));
    return index;
    // } else {
    //   return -1;
    // }
  };


  const addToFavoriteList = (data: any) => {
    console.log(data);

    //Ürünün sepette olup olmamasını kontrol ediyor
    let idx: any = findProductIndexById(getArr, Number(data.id))
    console.log(idx);
    setIndx(JSON.parse(JSON.stringify(idx)));

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

  // useEffect(() => {

  //   let data: any = [];
  //   if (indx === -1) {
  //     getArr !== undefined && getArr?.length > 0 && getArr.map((item: any) => data.push(item))
  //     favorites.length > 0 && data.push(favorites[0]);

  //     storage.set("favorites", [...data]);
  //   }
  // }, [favorites]);

  useEffect(() => {
    let data: any = [];
    if (indx === -1) {
      getArr !== undefined && getArr?.length > 0 && getArr.map((item: any) => data.push(item))
      favorites.length > 0 && data.push(favorites[0]);

      storage.set("favorites", [...data]);
    } else {
      if (allFavorites?.length > 0) {
        storage.set("favorites", [...allFavorites]);
      }
    }

  }, [allFavorites]);

  return {
    favorites,
    addToFavoriteList,
    emptyFavorites
  }
};

export default useFavorites;