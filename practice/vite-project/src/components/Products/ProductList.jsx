import { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import { getProductsFetch } from "../../reducers/reducerFetchs/reducerProductsFetchs";
import ProductItem from "./ProductItem";

function ProductList() {
    let {stateProduct,dispatchProduct}=useContext(MyContext)

    useEffect(()=>{
        if (localStorage.getItem("bag")) {
        } else {
          localStorage.setItem("bag", "[]");
        }

        getProductsFetch(dispatchProduct)
    },[])

    return(
       <ul>
        {
            stateProduct.product.map((item)=>
                <ProductItem key={item.id}{...item}/>
            )
        }
       </ul>
      )
  }
  export default ProductList;
  