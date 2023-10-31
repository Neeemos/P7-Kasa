import { Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/Home/Home";
import Carrousel from './pages/Logement/Logement';
import Error from "./pages/Error/Error";
import About from "./pages/About/About";



export default function routes() {
    return (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/logement/:id" element={<Carrousel />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      )

}

