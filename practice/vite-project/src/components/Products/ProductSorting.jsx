import { useContext } from "react";
import { MyContext } from "../../App";
function ProductSorting() {
  let {stateProduct,dispatchProduct}=useContext(MyContext)
    return(

     <select onChange={(ev)=>dispatchProduct({type:'SORTING DECREASE',payload:ev.target.value})}>
        <option value="decrease">DECREASE</option>
        <option value="increase">INCREASE</option>
     </select>
      )
  }
  export default ProductSorting;
  