import {React} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.min.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Accueil from './scenes/Accueil';
import Login from './scenes/Login';
import Inscription from './scenes/Inscription';
import Article from './scenes/Article';
import NoPage from './scenes/NoPage';
import Profile from './scenes/profile';
import Cours from './scenes/Cours';
function App() {
    return (
        <BrowserRouter>
            <ToastContainer position='top-right'/>
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/connexion" element={<Login />} />
                <Route path="/inscription" element={<Inscription />} />
                <Route path="/article" element={<Article/>} />
                <Route path='/profile' element={<Profile/>} />
                <Route path='*' element={<NoPage />} />
                <Route path='/cours' element={<Cours/>} />           
            </Routes>
        </BrowserRouter>
    );
}

export default App;
