import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Pages/Shared/Header/Header";
import Home from "./Pages/Home/Home/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./Pages/Shared/Footer/Footer";

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
