import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import './styles/style.scss'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
        <Route path='/' element={<Home/>} />
    </Routes>
  </Router>
);


