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
        <div className="">
            <div className="d-flex overflow-auto">
                {store.personajes.map((item) => (
                    <div className="col p-3" key={item.uid}>
                        <div className="card cardTamaño m-2 p-2">
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <Link to={"/detailview"}><button>Learn more!</button></Link>
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
            <div className="d-flex overflow-auto">
                {store.planetas.map((item) => (
                    <div className="col" key={item.uid}>
                        <div className="card card cardTamaño m-2 p-2">
                            <img src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <Link to={"/detailview"}><button>Learn more!</button></Link>
                                <button
                                onClick={()=>{
                                    let name = item.name
                                    actions.setFavorites(name)
                                }}
                              
                            ><i class="fa fa-heart"></i></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="d-flex overflow-auto">
                {store.vehiculos.map((item) => (
                    <div className="col" key={item.uid}>
                        <div className="card card cardTamaño m-2 p-2">
                            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <Link to={"/detailview"}><button>Learn more!</button></Link>
                                <button
                                onClick={()=>{
                                    let name = item.name
                                    actions.setFavorites(name)
                                }}
                                ><i class="fa fa-heart"></i></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
