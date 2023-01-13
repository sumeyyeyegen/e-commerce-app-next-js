import { useEffect, useState } from 'react';
//localS. tanım varsa onu al yoksa bos array tanımla.
const defaultBasket: any = process.browser && typeof window !== "undefined" && localStorage.getItem('basket') !== null && localStorage.getItem('basket') !== undefined && localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket') || "") : [];

const useBasket = () => {
  const [basketItems, setBasketItems] = useState<any[]>(defaultBasket)

  const addToBasket = (data: any, findBasketItems: any) => {
    //Ürünün sepette olup olmamasını kontrol ediyor

    if (!findBasketItems) {
      return setBasketItems((basketItems: any) => [...basketItems, data]);
    } else {
      // TODO:
    }
  }

  const removeFromBasket = (id: number) => {
    const newBasket: any = basketItems.filter((item: any) => item.id !== id);
    setBasketItems([...newBasket]);
  };

  const emptyBasket = () => {
    setBasketItems([]);
  };

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basketItems));
  }, [basketItems]);


  return {
    basketItems,
    removeFromBasket,
    addToBasket,
    emptyBasket
  }
};

export default useBasket;