import Link from 'next/link'
import React from 'react'

const ListItem = ({ item }: any) => {
  return (
    <tbody>
      <tr>
        <td className="image product-thumbnail">
          <img
            src={item?.image}
          />
        </td>

        <td className="product-des product-name">
          <h6 className="product-name">
            <Link href="/products">
              <a>
                {item.title}
              </a>
            </Link>
          </h6>
          <div className="product-rate-cover">
            <div className="product-rate d-inline-block">
              <div
                className="product-rating"
                style={{
                  width: "90%",
                }}
              ></div>
            </div>
            <span className="font-small ml-5 text-muted">
              {" "}
              (4.0)
            </span>
          </div>
        </td>
        <td
          className="price"
          data-title="Price"
        >
          <h4 className="text-brand">
            ${item.price}
          </h4>
        </td>
        <td
          className="text-center detail-info"
          data-title="Stock"
        ><div className="detail-extralink mr-15">
            <div className="detail-qty border radius ">
              <a
                // onClick={(e) =>
                //   decreaseQuantity(
                //     item.product_id
                //   )
                // }
                className="qty-down"
              >
                <i className="fi-rs-angle-small-down"></i>
              </a>
              <span className="qty-val">
                {item.quantity}
              </span>
              <a
                // onClick={(e) =>
                //   increaseQuantity(
                //     item.product_id
                //   )
                // }
                className="qty-up"
              >
                <i className="fi-rs-angle-small-up"></i>
              </a>
            </div>
          </div>
        </td>
        <td
          className="text-right"
          data-title="Cart"
        >
          <h4 className="text-body">
            $
            {item.quantity *
              item.price}
          </h4>
        </td>
        <td
          className="action"
          data-title="Remove"
        >
          <a className="text-muted">
            <i className="fi-rs-trash"></i>
          </a>
        </td>
      </tr>
    </tbody>
  )
}

export default ListItem