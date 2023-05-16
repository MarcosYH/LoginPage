import { Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Registers from "./components/Registers.jsx";

function App( ) {
  return (
    <>
        <div>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/login" element={ <Login/> } />
                <Route path="/register" element={ <Registers/> } />
            </Routes>
        </div>
    </>
  )
}

export default App
