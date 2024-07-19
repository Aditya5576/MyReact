import React, { useState } from "react";
import Billing from "./Billing";
import { toast } from "react-toastify";

const Product = () => {
  let [product, setProduct] = useState({
    prodimg: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT223?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1693248280978",
    prodname: "IPhone 15 Pro",
    prodprice: 120000,
    proddesc: "THE FEEL YOU FEEL",
  });

  let [pqty, setpqyt] = useState(0);

  let handelInc = () => {
    toast.success(`${pqty+1}Item Added to Cart`)
    setpqyt(pqty + 1);
  };

  let handelDec = () => {
    if (pqty > 0) {
      toast.error(`1 Item Removed from Cart`)
      setpqyt(pqty - 1);
    }
  };

  return (
    <div className="container">
      <div className="product">
        <img src={product.prodimg} alt="" />
        <h3>PRODUCT NAME :{product.prodname}</h3>
        <h3>PRODUCT PRICE :{product.prodprice}.Rs/-</h3>
        <h3>PRODUCT DESC :{product.proddesc}</h3>
        <h3>
          PRODUCT QTY :
          <br />
          <br />
          <div className="btn-block">
            <button onClick={handelDec}>-</button>
            <h1>{pqty}</h1>
            <button onClick={handelInc}>+</button>
          </div>
        </h3>
      </div>

      <div className="billing">
        <Billing data={product} pqty={pqty} />
      </div>
    </div>
  );
};

export default Product;
