import React, { Component } from 'react'
import Global from './Global'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

export default class Personajes extends Component {
    state = {
        personajes: []
    }

    loadPersonajes = ()=>{
      let idSerie = this.props.idserie
      let request ="api/Series/PersonajesSerie/"+idSerie ;
      let url = Global.urlApi +request
      axios.get(url).then(response=>{
        this.setState({
          personajes: response.data
        })
      })
    
    }
    componentDidMount=()=>{
      this.loadPersonajes();
    }
    componentDidUpdate = (oldProps)=>{
      if (this.props.idserie != oldProps.idserie) {
          this.loadPersonajes()
      }
    }
      
  render() {
    return (
      <div>
        <h1>Detalle Personajes</h1>
        <button className='btn btn-danger'>
          Volver
        </button>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Id Serie</th>
              <th>Personaje</th>
              <th>Imagen</th>
            </tr>
          </thead>
          <tbody>
          
          {
            this.state.personajes.map((personaje,index)=>{
              return(
                <tr key={index}>
                    <td>{personaje.idSerie}</td>
                    <td>{personaje.nombre}</td>
                    <td><img style={{width:"150px",height:"150px"}} src={personaje.imagen} alt="" /></td>
                </tr>)
            })
          }
          </tbody>
          </table>
      </div>
    )
  }
}
