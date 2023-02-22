import "./App.css";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path={"/"} element={<Home />} />
                <Route element={<About />} path={"/about"} />
                <Route element={<Contact />} path={"/contact"} />
            </Route>
        </Routes>
    );
}

export default App;
