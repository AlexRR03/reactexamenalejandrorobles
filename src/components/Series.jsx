import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import { Navigate, NavLink } from 'react-router-dom'
export default class Series extends Component {
    state={
        serie:null
    }

    loadSeries = ()=>{
        let idSerie = this.props.idserie
        console.log(idSerie)
        let request ="api/Series/"+idSerie
        let url = Global.urlApi+request
        axios.get(url).then(response=>{
            this.setState({
                serie:response.data
            })
        })
    }
    componentDidMount =()=>{
        this.loadSeries();
    }
    componentDidUpdate = (oldProps)=>{
        if (oldProps!= this.props.idserie) {
            this.loadSeries();
        }
    }
  render() {
    return (
      <div>
        <h1>Series</h1>
        
        {
            
            this.state.serie && (
                <table>
                    <tr>
                        <td><img src={this.state.serie.imagen} alt="" /></td>
                    </tr>
                        <tr>
                            <td>Nombre: {this.state.serie.nombre}</td>
                        </tr>
                        <tr>
                            <td>
                                Puntuacion: {this.state.serie.puntuacion}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button>
                                    <NavLink to={"/serie/personajeserie/"+this.props.idserie}>Personajes</NavLink>
                                </button>
                            </td>
                        </tr>
                    
                </table>
            )
        }

      </div>
    )
  }
}
