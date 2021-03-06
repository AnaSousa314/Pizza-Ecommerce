import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import axios from "axios";
import { useRouter } from "next/router";
import { reset } from "../redux/cartSlice";
import OrderDetail from "../components/OrderDetail";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);
  const [cash,setCash] = useState(false)
  const amount = cart.total;
  const currency = "BRL";
  const style = { layout: "vertical" };
  const dispatch = useDispatch();
  const router = useRouter()

  const createOrder = async (data) =>{
    try {
      const res = await axios.post("http://localhost:3000/api/orders",data);
      res.status === 201 && router.push("/orders/" +res.data._id)

      console.log(res.data)

      dispatch(reset())
    } catch (error) {
      console.log(error)
    }
  }

  const ButtonWrapper = ({ currency, showSpinner }) => {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              // Your code here after capture the order
              console.log(details)

              const shipping = details.purchase_units[0].shipping;
              createOrder({
                customer: shipping.name.full_name,
                address: shipping.address.address_line_1,
                total: cart.total,
                method: 1
              })

              console.log(shipping)
            });
          }}
        />
      </>
    );
  };

  
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
        <tbody>
          <tr className={styles.trTitle}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quatity</th>
            <th>Total</th>
          </tr>
        </tbody>

          <tbody>
            {cart.products.map((product) => {
              {/* console.log(product.extras); */}
              return (
                <tr className={styles.tr} key={product._id}>
                  <td>
                    <div className={styles.imgContainer}>
                      <Image
                        src={product.img}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </td>
                  <td>
                    <span className={styles.name}>{product.title}</span>
                  </td>
                  <td>
                    <span className={styles.extras}>
                      {product.extras.map((extra) => {
                        return <p key={extra._id}>{extra.text}, </p>;
                      })}
                    </span>
                  </td>
                  <td>
                    <span className={styles.price}>R${product.price}</span>
                  </td>
                  <td>
                    <span className={styles.quantity}>{product.quantity}</span>
                  </td>
                  <td>
                    <span className={styles.total}>
                      R${product.price * product.quantity}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CARRINHO</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>R${cart.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Desconto:</b>R$ 0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>R${cart.total}
          </div>
          {open ? (
            <div className={styles.paymentMethods}>
              <button className={styles.payButton} onClick={()=>setCash(true)}>CASH ON DELIVERY</button>
              <PayPalScriptProvider
                options={{
                  "client-id": `${process.env.NEXT_PUBLIC_CLIENT_ID}`,
                  components: "buttons",
                  currency: currency,
                  "disable-funding": "credit,card,p24,boleto",
                }}
              >
                <ButtonWrapper currency={currency} showSpinner={false} />
              </PayPalScriptProvider>
            </div>
          ) : (
            <button onClick={()=>setOpen(true)} className={styles.button}>FINALIZAR COMPRA</button>
          )}
        </div>
      </div>

      {cash && (
        <OrderDetail total={cart.total} createOrder={createOrder}/>
      )}

    </div>
  );
};

export default Cart;
