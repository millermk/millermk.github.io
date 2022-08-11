import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Experiences from './Components/Experiences';
import HomeJumbotron from './Components/HomeJumbotron';
import NavBar from './Components/NavBar';
import Overview from './Components/Overview';
import PortfolioItems from './Components/PortfolioItems';
import Projects from './Components/Projects';
import Publications from './Components/Publications';
import ScrollToTop from './Components/ScrollToTop';
import Services from './Components/Services';
import { experiences, projects, publications, services, portfolioItems } from './DataSource/DataSource';

function App() {
    return (
        <div className="App">
            <Router basename={process.env.PUBLIC_URL || "/"}>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<HomeJumbotron/>}/>
                    <Route path="/*" element={<NavBar/>}/>
                </Routes>
                <Routes>
                    <Route path="/" element={<Overview/>}/>
                    <Route path="/projects" element={<Projects projects={projects}/>}/>
                    <Route path="/publications" element={<Publications publications={publications}/>}/>
                    <Route path="/experience" element={<Experiences experiences={experiences}/>}/>
                    <Route path="/service" element={<Services services={services}/>}/>
                    <Route path="/portfolio" element={<PortfolioItems portfolioItems={portfolioItems}/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
