import React, { useEffect, useState } from "react";
import axiosInstance from "../helper/axiosInstance"
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Viewproduct = () => {

  let navigate = useNavigate();

  let [product, setProduct] = useState([])

  useEffect(()=>{
    let fetchData = async()=>{
      let {data} = await axiosInstance.get("/products")
      setProduct(data)
    }
    fetchData()
  },[])

  let handleDelete = ()=>{
    axiosInstance.delete(`/products/${id}`)

    toast.success("ITEM REMOVED")
    navigate("/")
  }

  return (
    <div className="form-holder">
      {product.map((x)=>{
        return(
          <div className="cards">
            <img style={{height:"100px" , width:"100px"}} src={`https://api.dicebear.com/9.x/personas/svg?seed=${x.id}`} alt="" />
            <h1>Product Name : <span>{x.pname}</span> </h1>
            <h2>Product Price : <span>{x.pprice}</span> </h2>
            <h2>Product Quantity : <span>{x.pqty}</span> </h2>
            <button>
              <Link to={`/updateproduct/${x.id}`}>UPDATE</Link>
            </button>
            <button onClick={()=>{
              handleDelete(x.id)
            }}>DELETE</button>
          </div>
      )

      })}
      </div>
        
  );
};

export default Viewproduct;
