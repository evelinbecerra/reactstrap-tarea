import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';
import { Jumbotron, Container } from 'reactstrap';
import Menu from './../menu/menu.js';
import ListaArticulos from './../articulos/listaArticulos.js';
import logo from './../../logo.svg';

import datos from './../datos.json';

class App extends Component{
    render()
    {
        return(
            <div>
                <Menu logo={logo}/>
                <Jumbotron>
                    <h1>Cursos de programación</h1>
                    <p className="lead"> Adquiere tu curso de programación</p>
                    <h5 className="text-info">10 USD</h5>
                </Jumbotron>

                <Container fluid>
                    <h4> Árticulos recientes </h4>
                    <ListaArticulos datos={datos} />
                </Container>

                <div className="bg-info text-center text-white  p-2">
                    <p className="mt-3 mb-0">Barra de Navegación Responsive con Reactstrap</p>
                    <p>Evelin Becerra <span className="font-weight-bold">© 2018</span></p>
                </div>
            </div>
        );
    }
}

export default App;