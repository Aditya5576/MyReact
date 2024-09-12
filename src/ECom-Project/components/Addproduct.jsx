import React, { useState } from "react";
import axiosInstance from "../helper/axiosInstance"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Addproduct = () => {

  let navigate = useNavigate();
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
    let payload = productData;

    axiosInstance.post("/products" , payload)
    toast.success("ADDED ITEM")
    navigate("/viewproduct")
  }

  return (
    <div className="form-holder">
      <form action="" className="" onSubmit={handelSubmit}>
        <h1 className="title">ADD PRODUCT!!</h1><br />
        {/* Name of Product */}
        <div className="addproduct">
          <label htmlFor="">PRODUCT NAME: </label>
          <input type="text" name="pname" id="" onChange={data} />
        </div>

        {/* Price of Product */}
        <div className="addproduct">
          <label htmlFor="">PRODUCT PRICE: </label>
          <input type="text" name="pprice" id="" onChange={data} />
        </div>

        {/* Quantity of Product */}
        <div className="addproduct">
          <label htmlFor="">PRODUCT QTY: </label>
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
