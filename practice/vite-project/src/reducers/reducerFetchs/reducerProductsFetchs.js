export async function getProductsFetch(dispatch) {
    try{
        let res=await fetch(`http://localhost:5001/goods`)
        let data=await res.json()
        dispatch({type:'GET PRODUCTS',payload:data})
    }catch(err){
        console.log(err)
    }

    
}
