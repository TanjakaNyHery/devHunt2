import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/Navigation/NavBar';
import '../assets/css/cours.css';
function Cours() {
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + "apip/cours");
        setData(response.data);
    };

    useEffect(() => {

        loadData();
        
    }, []);

  return (
    <div className='main'>
        <NavBar />
        <div className='container-cours'>
            <div className="card card-cours">
                <div className="card-header">
                    <div className="d-flex  header-cours">
                        <h2>Cours</h2>
                        <div className='d-flex'>
                            <input type="search" placeholder='Search' className='form-control search'></input>
                            <button className='btn btn-outline-success'>Rechercher</button>
                        </div>
                    </div>
                </div>
                <div className="card-body body-cours">
                  
                    {
                        data.map((item, index) => {
                            return (
                                <div key={index}>
                                    <hr />
                                    <div className="file" >
                                        <div className="element">
                                            <h4 className='titre'>{ item.label }</h4>
                                            <a href={process.env.REACT_APP_API_URL + "uploads/files/" + item.fichier} target="_blank" rel="noreferrer" className='btn btn-primary'>Telecharger</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    </div>
  )
}
export default Cours;