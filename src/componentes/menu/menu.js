import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button, Form, FormGroup, Input } from 'reactstrap';


class Menu extends Component{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
    }
    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

    render()
    {
        return(
            <div>
                <Navbar color="info" dark expand="lg">
                <NavbarBrand href="/" className="font-weight-bold">
                    <img src={this.props.logo} className="App-logo" alt="logo" />
                    Práctica Reactstrap
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem active>
                            <NavLink href="#">Inicio</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Cursos</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Blog</NavLink>
                        </NavItem>
                        
                        <NavItem>
                            <NavLink href="#">Contacto</NavLink>
                        </NavItem>
                    </Nav>
                        <Form inline>
                            <FormGroup className="mr-2">
                                <Input type="text" name="buscar" id="btnBuscar" placeholder="Buscar" />
                            </FormGroup>
                            <Button>Buscar</Button> 
                        </Form>
                </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Menu;