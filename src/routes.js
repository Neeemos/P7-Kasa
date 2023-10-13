import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home/Home";
import Carrousel from './pages/Carrousel/Logement';
import Error from "./pages/Error/Error";
import About from "./pages/About/About";
import Footer from "./components/footer/Footer";


export default function routes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route index element={<Home />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/logement/:id" element={<Carrousel />} />
                    <Route path="about" element={<About />} />
                    <Route path="*" element={<Error />} />*
                </Route>
            </Routes>
            <Footer />
        </div>
    )

}

