import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import './styles/style.scss'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AppEditImage from './components/app_editImage/AppEditImage';
import AppNasa from './components/app_nasa/AppNasa'

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


