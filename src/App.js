import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/index.css';
import Home from './pages/Home';
import FicheLogement from './pages/FicheLogement';
import APropos from './pages/APropos';
import NoPage from './pages/NoPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
      return (
            <Router>
                  <Header />
                  <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/a_propos" element={<APropos />} />
                        <Route
                              path="/logement/:id"
                              element={<FicheLogement />}
                        />
                        <Route path="*" element={<NoPage />} />
                  </Routes>
                  <Footer />
            </Router>
      );
}

export default App;
