import ProductPage from "./pages/productPage";
import { Routes,Route } from "react-router-dom";
import AdminPage from "./pages/adminPage";
import BagPage from './pages/bagPage'

function MainComponent() {
    return(
       <main>
        <Routes>
            <Route path='/' element={<ProductPage/>}/>
            <Route path='/admin' element={<AdminPage/>}/>
            <Route path='/bag' element={<BagPage/>}/>
        </Routes>
       </main>
      )
  }
  export default MainComponent;
  