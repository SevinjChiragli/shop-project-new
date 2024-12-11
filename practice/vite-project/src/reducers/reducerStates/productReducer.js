export let initialObjectProduct = {
  product: [],
};
export function productReducer(state, action) {
  if (action.type === "GET PRODUCTS") {
    console.log(action.payload);
    return { ...state, product: [...action.payload] };
  }
  if (action.type === "SORTING DECREASE") {
    let newArr = [...state.product];
    if (action.payload == "increase") {
      newArr.sort((a, b) => a.product_price - b.product_price);
    } else if (action.payload == "decrease") {
      newArr.sort((a, b) => b.product_price - a.product_price);
    }
    return { ...state, product:newArr };
  }
  return state;
}
