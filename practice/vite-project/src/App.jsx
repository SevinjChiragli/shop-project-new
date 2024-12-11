import { useReducer, useState,createContext } from 'react'
import './App.css'
import { initialObjectProduct,productReducer } from './reducers/reducerStates/productReducer'
import { initialObjectBag,bagReducer } from './reducers/reducerStates/bagReducers'
import { initialObjectOrder,orderReducer } from './reducers/reducerStates/orderReducer'
import MainComponent from './components/MainComponent'
import Header from './components/Header'
export const MyContext=createContext()

function App() {
let [stateProduct,dispatchProduct]=useReducer(productReducer,initialObjectProduct)
let [stateBag,dispatchBag]=useReducer(bagReducer,initialObjectBag)
let [stateOrder,dispatchOrder]=useReducer(orderReducer,initialObjectOrder)

  return (
    <MyContext.Provider value={{
      stateProduct,
      dispatchProduct,
      stateBag,
      dispatchBag,
      stateOrder,
      dispatchOrder
    }}>
    <Header/>
    <MainComponent/>
    </MyContext.Provider>
  )
}

export default App
