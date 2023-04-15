import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'

import NavBar from './components/NavBar';
import Home from "./pages/Home";
import Drinks from "./pages/Drinks";
import Contact from "./pages/Contact";
import Openings from "./pages/Openings";
import Gallery from "./pages/Gallery";

function App() {
    return (
        <div className="App">
            <div className="navBar">
                <Link to='/' className='logo'><h1>Pauls Club Potsdam</h1></Link>
                <NavBar />
            </div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/drinks' element={<Drinks />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/openings' element={<Openings />} />
                <Route path='/gallery' element={<Gallery />} />
            </Routes>
        </div>
    );
}

export default App;


// Erstelle eine Navigation mit React.
// Nutze react-router-dom um die Links zu erstellen.
// Nutze state/setState und Ternary Operator, um die Farben zu ändern.
