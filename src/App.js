import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Admin from "./pages/Admin";
import FAQ from "./pages/FAQ";
import Footer from "./components/Footer";
import PageContent from "./components/PageContent";

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
                        <Route path="/resources" element={<Resources />} />
                        <Route path="/faq" element={<FAQ />} />
                        <Route path="/admin" element={<Admin />} />
                    </Routes>
                </PageContent>
                <Footer />
            </div>
        </Router>
    );
}
