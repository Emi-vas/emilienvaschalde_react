import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import './styles/style.scss'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AppEditImage from './pages/AppEditImage';
import AppNasa from './pages/AppNasa'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/retouche-image-app' element={<AppEditImage />} />
        <Route path='/nasa-app' element={<AppNasa />} />
    </Routes>
  </Router>
);


