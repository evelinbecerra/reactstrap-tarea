import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ArticuloMarzo from './articuloMarzo.js';
import ArticuloFebrero from './articuloFebrero.js';



class ListaArticulos extends Component{
    render()
    {
        const articulos = this.props.datos.articulos;

        return(            
            <div>
            {
                articulos.marzo.map(
                    (item)=> {
                        return <ArticuloMarzo key={item.Id} {...item} />
                    }
                )
            }
            {
                articulos.febrero.map(
                    (item)=> {
                        return <ArticuloFebrero key={item.Id} {...item} />
                    }                
                )
            }
            </div>
        );
    }
}

export default ListaArticulos;