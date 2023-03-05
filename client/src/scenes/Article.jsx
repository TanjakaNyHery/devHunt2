import React from 'react';
import './../assets/css/Article.css';
import NavBar from './../components/Navigation/NavBar';
import { sessionService } from '../_services/account.service';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useState, useEffect } from 'react';
import defaultUser from './../assets/img/user.png';
const Article = () => {
    const [showForm, setShowForm] = useState(false);
    const [question, setQuestion] = useState('');
    const [code, setCode] = useState('');
    const [categorie, setCategorie] = useState([]);

    const [showComment, setShowComment] = useState(false);
    const handleClick = () => {
        setShowForm(!showForm);
    };
    const viewComment = () => {
        setShowComment(!showComment);
    }

    const loadCategorie = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + "api/categorie");
        setCategorie(response.data);
    };

    useEffect(() => {
        loadCategorie();
        
    }, []);

    // Envoyer publication
    const handleSubmit = (event) => {
        event.preventDefault();

        const data = JSON.stringify({
            "question": question,
            "code": code
        });
          
        axios({
            method: 'post',
            url: process.env.REACT_APP_API_URL + "api/publier",
            
            headers: {
                'Content-Type': 'application/json'
            },
            data : data
        }).then((response) => {

            /** Mettre une notification */
            toast.success("Vous êtes actuellement connecter", {
                hideProgressBar: true,
                closeOnClick: true,
                theme: "colored",
            });

            

        }).catch((error) => {

            /** Mettre une notification */
            toast.warning("Veuillez bien vérfier vos login", {
                hideProgressBar: true,
                closeOnClick: true,
                theme: "colored",
            });
        })

    }

    const handleInputQuestion = (event) => {
        const valueAfterChange = event.target.value;
        setQuestion(valueAfterChange);
    }

    const handleInputCode = (event) => {
        const valueAfterChange = event.target.value;
        setCode(valueAfterChange);
    }

    return (
        <div className="totalite">
        
        <NavBar />

        <div className="container-totalite">
            <div className="center">
                <div className="card card-main">
                    <div className="card card-publier">
                        <div className="card-header ">
                            <div className='pub'>
                                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                        Publier une question
                                    </button>
                                    <div className='d-flex'>
                                        <input type="search" placeholder='Search' className='form-control search'></input>
                                        <button className='btn btn-success'>Rechercher</button>
                                    </div>
                            </div>
                                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Problème</h5>
                                        <button type="button" className="btn btn-danger close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <form action="#" method="post" onSubmit={handleSubmit}>
                                            <div className="linear">

                                                    {
                                                        categorie.map((item, index) => {
                                                            return (
                                                                <div className="d-flex" key={index}>
                                                                    <input type="checkbox" className='form-check-input' id="back-end" name={item.nom} value={item.id} />
                                                                    <label className='form-check-label'>{'\u00A0'} {item.nom} </label>
                                                                </div>
                                                            )
                                                        })
                                                    }

                                            </div>
                                            <br />
                                            <label htmlFor="">Descritpion de l'erreur</label>
                                            <textarea name="description" className='form-control' id="description" value={question} onChange={handleInputQuestion} required placeholder='Décrivez votre problème' />
                                            <br />
                                            <label htmlFor="">Code</label>
                                            <textarea name="code" className='form-control' id="code" value={code} onChange={handleInputCode} required placeholder='Entrez votre code'/>
                                            <br />
                                            <hr />
                                            <div className="d-flex float-end">
                                                <button type="button" className="btn btn-danger close-modal" data-dismiss="modal">Close</button>
                                                <button type="submit" className="btn btn-primary" name='submit'>Save changes</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                </div>
                            </div>
                             </div>
                        </div>
                    </div>
                    <br />
                    <div className="card card-problematique">           
                        <div className="card-header">
                            <div className="user-info">
                                <img src={defaultUser} className="userPhoto" alt="user" width="75px" height="75px" />
                                <div className="pub-info">
                                    <h5 className="userName">Freddy RAKOTOMANDIMBY</h5>
                                    <div className="small">Publier le 04/03/2023</div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="container-categorie">
                                Catégorie : 
                                <button className="btn btn-light cat-pub" disabled="disabled">Front-End</button>
                                <button className="btn btn-light cat-pub" disabled="disabled">Back-End</button>
                            </div>
                            <hr/>
                            <div className="container-description">
                                <b>Description :</b> <br/>
                                <p className="description">Le commande Switch est introuvable avec react.</p>
                            </div>
                            <div className="container-code">
                                <b>Code :</b> <br/>
                                <p className="description">
                                    More error
                                </p>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="react-res">
                                <div className="reaction">
                                    <button className='btn btn-outline-success w-100'disabled >Résolu</button>
                                </div>
                                <div className="ViewCommentary">
                                    <button onClick={viewComment} className='btn btn-outline-primary w-100' id="commenter">{showComment ? 'Masquer les commentaires' : 'Voir les commentaires'}</button>
                                </div>
                                <div className="commentaire">
                                    <button onClick={handleClick} className='btn btn-outline-primary w-100' id="commenter">{showForm ? 'Commenter' : 'Commentaires'}</button>
                                </div>
                            </div>
                            <div className={showForm ? 'visible' : 'invisible'}>
                                <form>
                                <br />
                                    <textarea className='form-control'></textarea>
                                    <br />
                                <button type="submit" className="btn btn-primary float-end">Envoyer</button>
                                </form>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className={showComment ? 'visible' : 'invisible'}>
                                <div className="d-flex place">   
                                    <div className="user-info commentateur-info">
                                        <img src={defaultUser} className="userPhoto" alt="user" width="75px" height="75px" />
                                        <div className="pub-info">
                                            <h5 className="userName">Freddy RAKOTOMANDIMBY</h5>
                                            <div className="small">Publier le 04/03/2023</div>
                                        </div>
                                    </div>
                                    <div className="element-commentaire">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui unde repellendus minus impedit enim molestias natus harum omnis sequi temporibus ex voluptatem est velit corporis tempora, perspiciatis cupiditate aspernatur maxime!
                                        Facilis cumque nulla quis hic dicta eveniet rerum enim repellendus unde perferendis sed natus maxime, blanditiis, consequatur adipisci laudantium deleniti dignissimos vitae nobis quidem minima, vel dolore? Praesentium, voluptas officiis.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
  );
}

export default Article;