 export let initialObjectBag={
    bag:[]
}
 export function bagReducer(state,action){
    if(action.type==='ADD TO LOCALSTORAGE'){
        let bag= JSON.parse(localStorage.getItem("bag"));
        let addedProduct={...action.payload}
        addedProduct.count=1
        addedProduct.totalPrice=addedProduct.count*addedProduct.product_price
        bag.push(addedProduct);
        localStorage.setItem("bag", JSON.stringify(bag));  
       return{...state,bag:bag}   
    }
     else if(action.type==='GET BAG'){
        let bag= JSON.parse(localStorage.getItem("bag"));
        return{...state,bag:bag} 
     } else if(action.type==='DELETE FROM BAG'){
        let bag= JSON.parse(localStorage.getItem("bag"));
        // let filteredBag=bag.filter((item)=> item.id !== action.payload )
        // localStorage.setItem('bag',JSON.stringify(filteredBag))
        // return{...state,bag:filteredBag}
        let index= bag.findIndex((item)=>item.id===action.payload)
        bag.splice(index,1)
        localStorage.setItem('bag',JSON.stringify(bag))
        return{...state,bag:bag}
     }else if (action.type==='-'){
        let bag= JSON.parse(localStorage.getItem("bag"));
        let index=bag.findIndex((item)=>item.id==action.payload)
        bag[index].count -=1
        if(bag[index].count<1){
            bag.splice(index,1) 
        }else{
            bag[index].totalPrice=bag[index].count*bag[index].product_priice
        }
        localStorage.setItem('bag',JSON.stringify(bag))
        return{...state,bag:bag}
     } else if (action.type==='+'){
        let bag= JSON.parse(localStorage.getItem("bag"));
        let index=bag.findIndex((item)=>item.id==action.payload)
        bag[index].count +=1
        bag[index].totalPrice=bag[index].count*bag[index].product_priice
        localStorage.setItem('bag',JSON.stringify(bag))
        return{...state,bag:bag}
     }
    return state
}