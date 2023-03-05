import React from 'react';
import { Link } from 'react-router-dom';
import './../../assets/css/navbar.css';
import {sessionService} from './../../_services/account.service';

function NavBar() {
    let NavigationList;
    if(sessionService.isLogged){
    NavigationList = [
        {
            title : "Actualités",
            link : "/article"
        },
        {
            title : "Cours",
            link : "/cours"
        },
        {
            title : "Profil",
            link : "/profile"
        },
    ]
}else{
    NavigationList = [
        {
            title : "Accueil",
            link : "/"
        },
        {
            title : "Se connecter",
            link : "/connexion"
        },
        {
            title : "S'inscrire",
            link : "/inscription"
        },
    ]
}

    return (
        <nav className="navbar navbar-expand-lg navbar-dark navigateur">
            <div className="container-fluid">
                <Link to ="/" className="navbar-brand">E-FANAMPY</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                        {
                            NavigationList.map((val, key) => {
                                return (
                                    <li key={key} className="nav-item ">
                                        <Link to={val.link} className="nav-link"> {val.title} </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;