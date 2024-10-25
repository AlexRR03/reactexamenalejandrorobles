import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import { Navigate } from 'react-router-dom';
export default class CreatePersonaje extends Component {
    cajaNombre =React.createRef();
    cajaImagen= React.createRef();
    selectSerie = React.createRef()
    state = {
        series:[],
        status:false
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

    insertarPersonaje = (e)=>{
        e.preventDefault()
        let nombrePj = this.cajaNombre.current.value;
        let imagenPj = this.cajaImagen.current.value;
        let seriePj = parseInt(this.selectSerie.current.value);

        let personaje ={
            nombre: nombrePj,
            imagen:imagenPj,
            idSerie:seriePj
        }

        let request ="api/Personajes"
        let url = Global.urlApi+request
        axios.post(url,personaje).then(response=>{
            console.log("Insertado")
            this.setState({
                status:true
            })
        })
    }
    render() {
        return (
            <div>
                {this.state.status == true&&(<Navigate to="/"/>)}
                <h1>Crear Personajes</h1>
                <form onSubmit={this.insertarPersonaje}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" ref={this.cajaNombre}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Imagen</label>
                    <input type="text" className="form-control"  ref={this.cajaImagen}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Serie</label>
                    <select ref={this.selectSerie}>
                        {
                            this.state.series.map((serie,index)=>{
                                return(
                                    <option value={serie.idSerie} key={index}>
                                        {serie.nombre}
                                    </option>
                                )
                            })
                        }
                    </select>
                </div>
                <button className="btn btn-primary">Crear</button>
            </form>
        </div >
    )
    }
}
