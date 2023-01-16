import axios from 'axios';
import { GetServerSideProps } from 'next';
import React from 'react'
import CardComponent from '../components/Card';
import ListItem from '../components/ListItem';
import { Delete } from '@mui/icons-material'

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const productOptions: Object = {
    method: 'GET',
    url: `${process.env.NEXT_APP_BASE_ENDPOINT}/products`,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const products: any = await axios(productOptions).then((res: any) => res).catch(err => err)


  // const requestOptionById: Object = {
  //   method: 'GET',
  //   url: `http://localhost:83/api/model/${id}`,
  //   headers: {
  //     'Content-Type': 'application/json',
  //     "Authorization": authorization
  //   }
  // };

  // const responseById: any = await axios(requestOptionById).then((res: any) => res).catch(err => err)

  return {
    props: {
      productList: products.data ? products.data : []
      // modelList: responseById?.data?.model
    }
  }
}

const Basket = ({ productList }: any) => {
  return (
    <>
      <div className="row">
        <div className="col-lg-12 mb-40">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1 className="heading-2 mb-10">Sepetim</h1>
              <h6 className="text-body">
                Sepetinizde{" "}
                <span className="text-brand">{productList.length}</span>{" "}
                adet ürün var.
              </h6>
            </div>
            <h6 className="text-body">
              <a href="#" className="text-muted">
                <Delete />
                Temizle
              </a>
            </h6>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-10 offset-lg-1" >
          <div className="table-responsive shopping-summery">
            <table
              className={
                productList.length > 0
                  ? "table table-wishlist"
                  : "d-none"
              }
            >
              <thead>
                <tr className="main-heading">
                  <th className="custome-checkbox start" style={{ paddingLeft: "1.5em" }} colSpan={2}>
                    Ürün
                  </th>
                  <th scope="col">Birim Fiyatı</th>
                  <th scope="col">Adet</th>
                  <th scope="col">Toplam Ücret</th>
                  <th scope="col" className="end">
                    Sil
                  </th>
                </tr>
              </thead>
              {
                productList.map((product: any, idx: any) => {
                  return <ListItem item={product} key={idx} />
                })
              }

            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Basket