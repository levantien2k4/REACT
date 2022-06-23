import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';
class MyNav extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                    </ul>
                    <Routes>
                        <Route exact path='/' element={<Home />}></Route>
                        <Route exact path='/about' element={<About />}></Route>
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default MyNav;