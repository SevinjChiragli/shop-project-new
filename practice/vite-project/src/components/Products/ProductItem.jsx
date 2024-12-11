import { useContext } from "react";
import { MyContext } from "../../App";

function ProductItem(props) {

let{dispatchBag} =useContext(MyContext)

  return (
    <li>
      <p>{props.product_name}</p>
      <p>{props.product_description}</p>
      <p>{props.product_price}</p>
      <img src={props.url} />
      <button onClick={()=>dispatchBag({type:'ADD TO LOCALSTORAGE',payload:props})}>ADD to localstorage</button>
    </li>
  );
}
export default ProductItem;
