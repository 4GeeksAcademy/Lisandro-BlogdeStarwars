import React, { useState, useEffect, useContext } from 'react';
// import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export const Home = () => {
    const { store, actions } = useContext(Context);
    // const [personajes, setPersonajes] = useState([]);
    useEffect(() => { // cada vez que quiera ejecutar una funcion ni bien se cargue el componente debo hacer un useEffect, React dice esto va asi! siempre antes del return
        actions.getPersonajes()
        actions.getPlanetas()
        actions.getVehiculos()
        actions.setFavorites()
    }, [])
    return (
        <div className=''>
            <div className="row row-cols-sm-12 row-cols-md-6 p-5 mb-3 data-bs-smooth-scroll">
                {store.personajes.map((item) => (
                    <div className="col" key={item.uid}>
                        <div className="card">
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <Link to={"/detailview"}><button>detalles</button></Link>
                                <button
                                onClick={()=>{
                                    let name = item.name
                                    actions.setFavorites(name)
                                }}
                                ><i class="fa fa-heart"></i></button>
                            </div>
                        </div>
                    </div>
                ))} </div>
            <div className="row row-cols-sm-12 row-cols-md-6 p-5 mb-3 bg-dark">
                {store.planetas.map((item) => (
                    <div className="col" key={item.uid}>
                        <div className="card">
                            <img src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <Link to={"/detailview"}><button>detalles</button></Link>
                                <button
                                onClick={()=>{
                                    let name = item.name
                                    actions.setFavorites(name)
                                }}
                                >favoritos</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="row row-cols-sm-12 row-cols-md-6 p-5 mb-3 bg-dark">
                {store.vehiculos.map((item) => (
                    <div className="col" key={item.uid}>
                        <div className="card">
                            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <Link to={"/detailview"}><button>detalles</button></Link>
                                <button
                                onClick={()=>{
                                    let name = item.name
                                    actions.setFavorites(name)
                                }}
                                >favoritos</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
