'use client';
import Router from 'next/router'
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from 'react'
import styles from '../../styles/Home.module.css'
const Payscreen = (props) =>{
    const [succeeded, setSucceeded] = useState(false);
    const [paypalErrorMessage, setPaypalErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);
    const [payment,setPayment] = useState(false);
    const [billingDetails, setBillingDetails] = useState("");
    const [query,setQuery] = useState("")

        const createOrder = (data, actions) => {

        return actions.order
          .create({
            purchase_units: [
              {
                amount: {
                  value: props.rate
                },
              },
            ],
            application_context: {
              shipping_preference: "NO_SHIPPING",
            },
          })
          .then((orderID) => {
            setOrderID(orderID);
            return orderID;
          });
      };

      const onApprove = (data, actions) => {

            return actions.order.capture().then(function (details) {
                
            const {payer} = details;
            setBillingDetails(payer);
            setSucceeded(true);
            setPayment(true)
            })
        };

        {
            payment && Router.push({
                    pathname:'/thankyou',
                    query: {email: query}
                 })
        }

        

    


      const handlechange = setValue => e => setValue(e.target.value) 
    
      // handles when a payment is declined
      const onError = (data, actions) => {
        setPaypalErrorMessage("Something went wrong with your payment")
      };


    return (
        <>
        <div className={styles.userd}>
            <h3>Please enter the details below to continue booking: </h3>
            <form>
                <div>
                <label htmlFor="username">Username: </label>
                <input className={styles.inputbox} type="text" id="username" name="username" required />
                <label htmlFor="email">Email: </label>
                <input className={styles.inputbox} onChange={handlechange(setQuery)} value={query} type="text" id="email" name="email" required />
                </div>
            </form>
        </div>
        <PayPalButtons
        style={{
          color: "blue",
          shape: "pill",
          label: "pay",
          tagline: false,
          layout: "vertical",
        }}
        createOrder={createOrder}
        onApprove={onApprove}
        onError={onError}
      />
      </>
    )
}

export default Payscreen