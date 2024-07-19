import React from 'react'

const Billing = (props) => {

  let{prodname, prodprice, proddesc}=props.data

  return (
    <div className='billing-container'>
        <h3>PRODUCT NAME :{prodname}</h3>
        <h3>PRODUCT PRICE :{prodprice}</h3>
        <h3>PRODUCT DESC :{proddesc}</h3>
        <h3>TOTAL AMOUNT :
            <h1 style={{color:"gold", background:"black", borderRadius:"10px"}}>{props.pqty*120000}</h1>
        </h3>
    </div>
  )
}

export default Billing
