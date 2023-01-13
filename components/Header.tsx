import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Favorite, Home, Inventory, ShoppingBasket } from '@mui/icons-material';

export { Header };

const menuList = [
  { value: "Ana Sayfa", href: "/" },
  { value: "Ürünler", href: "/products" },
  { value: "Sepetim", href: "/basket" },
  { value: "Favorilerim", href: "/favorites" }
]

const Header = () => {
  const router = useRouter();
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  return (
    <header id='header'>
      <nav className="nav" >
        {/* <div className='d-flex justify-content-end w-100'> */}
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} menu`}>
          {
            menuList.map((menu: any, idx: number) => {
              return <div key={idx}>
                <Link href={menu.href}>
                  <div className='d-flex align-items-center' onClick={() => setNavActive(false)}>
                    {
                      menu.value === "Ana Sayfa" ? <Home className='icon mr-2' /> : menu.value === "Ürünler" ? <Inventory className='icon mr-2' /> : menu.value === "Sepetim" ? <ShoppingBasket className='icon mr-2' /> : menu.value === "Favorilerim" ? <Favorite className='icon mr-2' /> : ""
                    }
                    {menu.value}
                  </div>
                </Link>
              </div>
            })
          }
        </div>
      </nav>

    </header>
  )
}

export default Header