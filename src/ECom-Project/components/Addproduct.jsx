import React, { useState } from "react";


const Addproduct = () => {
  let [productData, setProductData] = useState({
    pname: "",
    pprice: "",
    pqty: "",
    pimg: "",
  });

  let data = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  let handelSubmit = (e) => {
    e.preventDefault();
    console.log(productData);
  };

  return (
    <div className="form-holder">
      <form action="" className="" onSubmit={handelSubmit}>
        {/* Name of Product */}
        <div className="addproduct">
          <label htmlFor="">Name: </label>
          <input type="text" name="pname" id="" onChange={data} />
        </div>

        {/* Price of Product */}
        <div className="addproduct">
          <label htmlFor="">Price: </label>
          <input type="text" name="pprice" id="" onChange={data} />
        </div>

        {/* Quantity of Product */}
        <div className="addproduct">
          <label htmlFor="">Qty: </label>
          <input type="number" name="pqty" id="" onChange={data} />
        </div>

        {/* Image of Product */}
        <div className="addproduct">
          <label htmlFor="">Image(Path): </label>
          <input type="text" name="pimg" id="" onChange={data} />
        </div>

        <div>
          <button className="add-btn">ADD TO CART</button>
        </div>
      </form>
    </div>
  );
};

export default Addproduct;
