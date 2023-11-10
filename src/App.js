import "./App.css";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Materials from "./pages/materials/Materials";
import { Login } from "./pages/login/Login";
import Cart from "./pages/cart/Cart";

function App() {
 

  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/epi-lista" element={<Login />} />
            <Route path="/Materials" element={<Materials />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
