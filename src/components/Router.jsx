import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Home from './Home'
import MenuSeries from './MenuSeries'
import Series from './Series'
import Personajes from './Personajes'
import CreatePersonaje from './CreatePersonaje'
import UpdatePersonajeSerie from './UpdatePersonajeSerie'
export default class Router extends Component {
    render() {
        function SeriesElement (){
            let {idserie} = useParams()
            return (<Series idserie={idserie}></Series>)
        }
        function PersonajesSerieElement(){
            let{idserie}=useParams()
            return(<Personajes idserie={idserie}></Personajes>)
        }
        return (
            <div>
                <BrowserRouter>
                    <MenuSeries/>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/serie/:idserie' element={<SeriesElement/>}/>
                        <Route path='/serie/personajeserie/:idserie' element={< PersonajesSerieElement/>}/>
                        <Route path='/create' element={<CreatePersonaje></CreatePersonaje>}/>
                        <Route path='/update'  element={<UpdatePersonajeSerie />}/>
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}
