import axios from 'axios';
import { GetServerSideProps } from 'next';
import React, { useEffect } from 'react'
import CardComponent from '../components/Card';
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { fetchProducts } from '../redux/reducers/ProductReducer';

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

const Products = ({ productList }: any) => {
  const { products } = useAppSelector((state: any) => state.product);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [])

  return (
    <>
      <div className="card-header flex-wrap border-0 pb-0">
        <div className="card-title">
          <h3 className="card-label m-0">Ürünler</h3>
          <span className="d-block text-muted font-size-sm"><small>Sisteme kayıtlı {productList?.length} ürün bulundu</small></span>
        </div>
        {/* <div className="card-toolbar">
          <div className="btn btn-primary btn-block mt-4">Ürün Ekle</div>
        </div> */}
      </div>

      <div className='row'>
        {
          productList.map((product: any) => {
            return <div key={product.id} className="col-12 col-md-6 col-lg-3 mb-3">
              <CardComponent item={product} />
            </div>
          })
        }

      </div>
    </>
  )
}

export default Products