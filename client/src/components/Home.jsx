import { React } from 'react';
import "./../assets/css/home.css";
import Image1 from './../assets/img/Setting.jpg';
import Image2 from './../assets/img/Learn.jpg';
import Image3 from './../assets/img/Equipe.jpg';
import {useState, useEffect} from 'react';
function Home() {
    
  return (
    <>
        <div className="container-principale">
            <div className="Contain">
                <div className="Hleft ">
                <img className="vector" src={Image1} alt="Tector"/>
                </div>
                <div className="Hright">
                    <div className="descr">
                        <h1>
                            Evoluons ensemble
                        </h1>
                        <p>
                            Soutenir et aider, c'est aussi apprendre.
                        </p>
                    </div>
                </div>
            </div>
            <br/>
            <div className="Contain">
                <div className="Hleft">
                    <div className="descr">
                        <h1 className="text-align-center">
                            Ne cessez d'apprendre
                        </h1>
                        <p>
                            Télécharger des supports de cours gratuits sur le site.
                        </p>
                    </div>                
                </div>

                <div className="Hright magie">
                <img className="vector" src={Image2} alt="Tector"/>
                    
                </div>
            </div>
            <br/>
            <br/>
            <div className="Contain">
                <div className="Hleft image3">
            <img className="vector" src={Image3} alt="Hector"/>
                    
                </div>
        
                <div className="Hright">
                    <div className="descr">
                        <h1 className="text-align-center">
                            Mettez vos compétences en avant
                        </h1>
                        <p>
                            Participer à nos défis pour montrer vos compétences.
                        </p>
                    </div>
                </div>
            </div>
    </div>
    </>
    )
}

export default Home;
