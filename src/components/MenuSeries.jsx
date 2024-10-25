import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Global from './Global'
export default class MenuSeries extends Component {
    state={
        series : []
    }

    loadSeries = ()=>{
        let request = "api/Series"
        let url = Global.urlApi +request
        axios.get(url).then(response=>{
            this.setState({
                series: response.data
            })
        })
    }

    componentDidMount = ()=>{
        this.loadSeries();
    }
    render() {
        return (
            <div>
                <div>
                    <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
                        <div className="container-fluid">
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQMympBYNIQqeh-JvHQDRAF6564Nxw-8lshA&s' className="navbar-brand"></img>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarsExample03">
                                <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                                    <li className="nav-item">
                                        <NavLink to="/" className="nav-link active" aria-current="page">
                                            Home
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/create" className="nav-link" >Nuevo Personaje</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/update">Modificar Personaje</NavLink>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Series</a>
                                        <ul className="dropdown-menu">
                                             {
                                                this.state.series.map((serie, index) => {
                                                    return (
                                                        <li key={index}>
                                                            <NavLink to={"/serie/"+serie.idSerie} className="dropdown-item">{serie.nombre}</NavLink>  
                                                        </li>)
                                                })
                                            } 
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}
