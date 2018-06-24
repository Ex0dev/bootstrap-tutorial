import React, {Component} from "react";
import NavDropdown from './navdropdown'

const NavItem = props => {
    const pageURI = window.location.pathname + window.location.search;
    const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
    const aClassName = props.disabled ? "nav-link disabled" : "nav-link";
    return (
        <li className={liClassName}>
            <a href={props.path} className={aClassName}>
                {props.name}
                {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ""}
            </a>
        </li>
    );
};

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark" id="navbar">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <NavItem path="/" name="Home"/>
                        <NavItem path="#ptest" name="Link"/>
                        <NavItem path="/disabled" name="Disabled" disabled="true"/>

                        <NavDropdown name="Dropdown">
                            <a className="dropdown-item" href="/">Action</a>
                            <a className="dropdown-item" href="/">Another action</a>
                            <div className="dropdown-divider"/>
                            <a className="dropdown-item" href="/">Something else here</a>
                        </NavDropdown>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        );
    }
}

export default Navigation;