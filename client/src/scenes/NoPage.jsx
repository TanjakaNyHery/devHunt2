import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../components/Navigation/NavBar';
import Image from "./../assets/img/Na_Nov_26.jpg";

export default function NoPage() {
  return (
    <>
        <NavBar />
        <br/>
        <section className="page-404 section text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <img src={Image} alt='404' className="mx-auto d-block" width="500px" height="500px"/> 
                        <h1>404</h1>
                        <h2>Page Not Found</h2>
                        <p>Sorry, but the page you were trying to view does not exist.</p>
                        <Link to="/" className="btn btn-danger mt-20">
                            Retourner sur la page d'accueil
                        </Link>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}
