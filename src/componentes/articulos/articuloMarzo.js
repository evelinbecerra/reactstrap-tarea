import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Icon} from 'react-fa'
import { Badge } from 'reactstrap';

class ArticuloMarzo extends Component{
    render()
    {
        return(
            <div key={this.props.Id} className="rounded bg-secondary p-4 my-3 text-white">
                <h2>{this.props.titulo}</h2>
                <h6>
                    <Icon name="user" className="mr-2" />Por {this.props.autor}
                    <Icon name="calendar" className="mr-2 ml-4" />{this.props.fecha}
                </h6>
                <h6><Badge color={this.props.colorTipo}>{this.props.tipo}</Badge><Badge color="light" className="ml-1">{this.props.lenguaje}</Badge></h6>
                <p className="text-justify">
                    {this.props.descripcion}
                </p>
            </div>
        );
    }
}

export default ArticuloMarzo;