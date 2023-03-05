import {React ,useState} from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { sessionService } from '../_services/account.service';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import Image from '../assets/img/login.jpg';
import '../assets/css/login.css';

export default function Login() {
    const [mail, setMail] = useState('');
    const [pwd, setPwd] = useState('');
    const navigate = useNavigate();

    // Vérifier l'email et le mot de passe
    const handleSubmit = (event) => {
        event.preventDefault();
        let token = undefined;

        const data = JSON.stringify({
            "username": mail,
            "password": pwd
        });
          
        axios({
            method: 'post',
            url: process.env.REACT_APP_API_URL + "api/login_check",
            
            headers: {
                'Content-Type': 'application/json'
            },
            data : data
        }).then((response) => {
            /** Enregistrer le token  */
            token = response.data.token;

            axios({
                method: 'get',
                url: process.env.REACT_APP_API_URL + "user/get/" + mail,
                
                headers: {
                    'Content-Type' : 'application/json',
                },
            }).then((response) => {
                console.log("réussi");
                localStorage.removeItem('token');
                localStorage.setItem('token', token);
                sessionService.saveUser(response.data.id, response.data.email, response.data.nom, response.data.prenom, response.data.niveau, response.data.parcours, response.data.photo, token);
                console.log(sessionService.getUserPhoto());
            }).catch(() => {
                console.log("Une erreur s est produite");
            });

            /** Mettre une notification */
            toast.success("Vous êtes actuellement connecter", {
                hideProgressBar: true,
                closeOnClick: true,
                theme: "colored",
            });

            /** Rediriger la page vers l'accueil */
            navigate("/");
            

        }).catch((error) => {

            /** Mettre une notification */
            toast.warning("Veuillez bien vérfier vos login", {
                hideProgressBar: true,
                closeOnClick: true,
                theme: "colored",
            });
        })

    }


    const handleInputMail = (event) => {
        const valueAfterChange = event.target.value;
        setMail(valueAfterChange);
    }

    const handleInputPass = (event) => {
        const valueAfterChange = event.target.value;
        setPwd(valueAfterChange);
    }
    
    return (
            <div className="cont-align">
            <section className="container-principal sizing section">
                <div className="container container py-5 h-100 cont-pr">
                    <div className="row d-flex align-items-center justify-content-center h-100 container-image">
                        <div className="col-md-8 col-lg-7 col-xl-6">
                            <img src={Image} className="img-fluid" alt="ENI" width="350vh"/>
                        </div>
                        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1 form">
                            <h3 className='titleLog'>Se connecter</h3> <br />
                            <form method='post' onSubmit={handleSubmit}>
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form1Example13"><b>Adresse mail</b></label>
                                <input type="email" name='email' id="form1Example13" className="form-control" placeholder='Entrez votre adresse mail' value={mail} onChange={handleInputMail} required/>
                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form1Example23"><b>Mot de passe</b></label>
                                <input  type="password" name="password" id="form1Example23" className="form-control" placeholder='Entrez votre mot de passe'  value={pwd} onChange={handleInputPass} required/>
                            </div>

                            <div className="d-flex justify-content-around align-items-center mb-4">
                                <LinkContainer to="/inscription"><p className='link'><u>Mot de passe oublié ?</u></p></LinkContainer>
                            </div>
                            <button  type="submit" className="btn btn-primary btn-lg btn-block btn-login">Log in</button>
                            </form>
                        </div>
                    </div>
                    </div>
            </section>
            </div>
    )
}
