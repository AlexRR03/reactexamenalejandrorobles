import React, { Component } from 'react'
import Global from './Global';
import axios from 'axios';
export default class UpdatePersonajeSerie extends Component {
    selectSerie = React.createRef();
    selectPersonaje=React.createRef();
    state = {
        listaSeries:[],
        listaPersonajes:[],
        status:false
    }
    loadSeries = ()=>{
        
        let request ="api/Series"
        let url = Global.urlApi+request
        axios.get(url).then(response=>{
            this.setState({
                listaSeries:response.data
            })
        })
    }
    loadPersonajes = ()=>{
        let request ="api/Personajes" ;
        let url = Global.urlApi +request
        axios.get(url).then(response=>{
          this.setState({
            listaPersonajes: response.data
          })
        })
    }

    componentDidMount = ()=>{
        this.loadSeries();
        this.loadPersonajes();
    }

    updatePersonajes =(e)=>{
        e.preventDefault();
        
        let idSerie = parseInt(this.selectSerie.current.value) 
        let idPersonaje = parseInt(this.selectPersonaje.current.value)
        let request = "api/Personajes/"+idPersonaje+"/"+idSerie
        let url = Global.urlApi+request
        axios.put(url).then(response=>{
            console.log("update")
            this.setState({
                status:true
            })
        })
    }
  render() {
    return (
      <div>
        <h1>Update</h1>
            <form onSubmit={this.updatePersonajes}> 
                <div className="mb-3">
                    <label className="form-label">Seleccionar serie: </label>
                    <select ref={this.selectSerie}>
                       {
                        this.state.listaSeries.map((serie,index)=>{
                            return(<option value={serie.idSerie} key={index}>
                                {serie.nombre}
                            </option>)
                        })
                       }
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Seleccionar personaje</label>
                    <select ref={this.selectPersonaje}>
                       {this.state.listaPersonajes.map((personaje,index)=>{
                        return(<option value={personaje.idPersonaje} key={index}>
                            {personaje.nombre}
                        </option>)
                       })}
                    </select>
                </div>
                <button>Actualizar</button>
                </form>
      </div>
    )
  }
}
