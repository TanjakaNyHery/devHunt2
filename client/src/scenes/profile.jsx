import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './../assets/css/profile.css';
import { toast } from 'react-toastify';
import NavBar from '../components/Navigation/NavBar';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { sessionService } from '../_services/account.service';
import defaultUser from './../assets/img/user.png';

function Profile() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    let location = useLocation();
    let lienPhoto = process.env.REACT_APP_API_URL + "uploads/image/profile/";

    const loadData = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + "oneuser/" + sessionService.getIdUser());
        setData(response.data);
    };

    useEffect(() => {

        loadData();
        if(sessionService.isLogged()) {
            loadData();
        } else {
            /** Mettre une notification */
            toast.warning("Veuillez d'abord vous connecté", {
                hideProgressBar: true,
                closeOnClick: true,
                theme: "colored",
            });
    
            /** Rediriger la page vers l'accueil */
            navigate("/connexion");
        }
        
    }, [location]);


    

    return (
        <>

            <NavBar/>

            <div className="wrapperd">

            <section className="section bg-secondary">
                <div className="container">
                    <div className="card card-profile shadow mt--300 profil">
                    <div className="px-4">
                        <div className="row justify-content-center display">
                            <div className="col-lg-3 order-lg-2">
                                <div className="card-profile-image">
                                    <img src={data.photo ? lienPhoto + data.photo : defaultUser} alt='profile' className="rounded-circle image" />
                                </div>
                            </div>

                            <div className="col-lg-4 order-lg-1">
                                <div className="card-profile-stats d-flex justify-content-center">
                                
                            </div>
                        </div>
                        </div>
                        <div className="text-center mt-5">
                        <h3> {data.nom} <span className="font-weight-light"> {data.prenom} </span></h3>
                        <div className="h6 font-weight-300"><i className="ni location_pin mr-2"></i> {data.email} </div>
                        <div className="h6 mt-4"><i className="ni business_briefcase-24 mr-2"></i> {data.niveau} {data.parcours} </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>

            </div>
        </>
    );
}

export default Profile;