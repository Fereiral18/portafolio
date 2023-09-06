import { Link, Route, Routes } from "react-router-dom";
import "./styles.css";
import { Home } from "../home/Home";
import { About } from "../../pages/about/About";
import { Projects } from "../../pages/projects/Projects";
import { Contact } from "../../pages/contact/Contact";
import { Footer } from "../footer/Footer";

export const BarrNavegation = () => {
  return (
    <>
      <div className="container-navegation">
        <p>logo</p>
        <nav className="navegation">
          <ul className="list">
            <li>
              <Link to="*">Logo de la pagina</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
            <li>
              <Link to="linkedin"> logo linkedin</Link>
            </li>
            <li>(link X)</li>
            <li>(link facebook)</li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="*" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </>
  );
};
