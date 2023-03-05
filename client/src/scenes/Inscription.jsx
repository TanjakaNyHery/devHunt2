import React from 'react';
import './../assets/css/inscription.css';
import Image from './../assets/img/signin.jpg';
import {Link} from 'react-router-dom';
const Inscription = () => {
    return (
    <div className="section-inscription 120vh">
      <br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <section className="text-center text-lg-start">
        <div className="container">
        <div className="row g-0 align-items-center form-log">
            <div className="card cascading-right">
              <div className="card-body p-5 shadow-5 text-center">
                <h2 className="fw-bold mb-5">Sign in</h2>
                <form action='#' method='Post'>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="nom" name="nom" className="form-control" placeholder='Entrez votre nom'/>
                        <label className="form-label" htmlFor="form3Example1">Nom</label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="prenom" name="prenom" className="form-control" placeholder='Entrez votre prénom'/>
                        <label className="form-label" htmlFor="form3Example2">Prénoms</label>
                      </div>
                    </div>
                  </div>


                  <div className="row">
                  <div className="col-md-6 mb-4">
                        <input type="text" id="matricule" name="matricule" className="form-control" placeholder='Entrez votre inscription'/>
                        <label className="form-label" htmlFor="form3Example2">N° Inscription</label>
                      </div>
                      <div className="col-md-6 mb-4">
                          <input type="email" id="email" name="email" className="form-control" placeholder='Entrez votre email'/>
                          <label className="form-label" htmlFor="form3Example3">Email</label>
                      </div>
                      
                  </div>


                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <select name="niveau" id="niveau" className='form-select'>
                        <option value="L1">L1</option>
                        <option value="L2">L2</option>
                        <option value="L3">L3</option>
                        <option value="M1">M1</option>
                        <option value="M2">M2</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-4">
                    <select name="parcours" id="parcours" className='form-select'>
                        <option value="GB">GB</option>
                        <option value="SR">SR</option>
                        <option value="IG">IG</option>
                      </select>
                    </div>
                  </div>


                  <div className="mb-3">
                  <label htmlFor="formFile" className="form-label f-l">Photo de profil</label>
                      <input className="form-control" type="file" id="formFile"/>
                  </div>
                  <div className="form-outline mb-4">
                    <input type="password" id="form3Example4" className="form-control" placeholder='Entrez votre mot de passe'/>
                    <label className="form-label" htmlFor="form3Example4">Password</label>
                  </div>
    
                  <button type="submit" className="btn btn-primary btn-block mb-4">
                    Sign up
                  </button>
                  <p>Vous avez déjà un compte.<Link to="/connexion">Se connecter</Link></p>
                </form>
              </div>
          </div>
        </div>
        <div className="form-img">
          <img src={Image}className="w-100"
            alt="Sary" />
        </div>

      </div>
    </section>
  </div>
  );
}

export default Inscription;