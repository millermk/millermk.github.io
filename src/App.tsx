import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Experiences from './Components/Experiences';
import HomeJumbotron from './Components/HomeJumbotron';
import NavBar from './Components/NavBar';
import Overview from './Components/Overview';
import Projects from './Components/Projects';
import Publications from './Components/Publications';
import ScrollToTop from './Components/ScrollToTop';
import Services from './Components/Services';
import { experiences, projects, publications, services } from './DataSource/DataSource';

function App() {
    return (
        <div className="App">
            <Router basename={process.env.PUBLIC_URL || "/"}>
                <ScrollToTop />
                <Switch>
                    <Route path="/" exact={true} component={HomeJumbotron}/>
                    <Route path="/" component={NavBar}/>
                </Switch>
                <Switch>
                    <Route path="/" exact={true} component={Overview}/>
                    <Route path="/projects" exact={true}><Projects projects={projects}/></Route>
                    <Route path="/publications" exact={true}><Publications publications={publications}/></Route>
                    <Route path="/experience" exact={true}><Experiences experiences={experiences}/></Route>
                    <Route path="/service" exact={true}><Services services={services}/></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
