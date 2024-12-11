import { useContext } from "react";
import { MyContext } from "../../App";

function BagItem(props) {
    let{dispatchBag} =useContext(MyContext)
    
  return (
    <li>
      <p>{props.product_name}</p>
      <p>{props.product_description}</p>
      <p>{props.product_price}</p>
      <img src={props.url} />
      <button onClick={()=>dispatchBag({type:'DELETE FROM BAG',payload:props.id})}> DELETE FROM BAG</button>
      <div>
        <button onClick={()=>dispatchBag({type:'-',payload:props.id})}>-</button>
        <p>{props.count}</p>
        <button onClick={()=>dispatchBag({type:'+',payload:props.id})}>+</button>
      </div>
  
    </li>
  );
}
export default BagItem;
