import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import Services from "./Components/Services";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import PageContent from "./Components/PageContent";

import './styles/Card.css';
import './styles/General.css';
import './styles/Input.css';
import './styles/Navigation.css';

export default function App() {
    return (
        <Router>
            <div className="app-wrapper">
                <Navigation />
                <PageContent>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </PageContent>
                <Footer />
            </div>
        </Router>
    );
}
