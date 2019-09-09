import React from 'react';
import './Header.css'
import { Link } from "react-router-dom";
import Button from '../UI/button/Button';
import logo from '../assets/logo.png';
import { connect } from 'react-redux';

const header = props => {
    let home = props.isLoggedIn ? <Link to="/"><Button text="HOME" /></Link> : null;
    let login = !props.isLoggedIn ? <Link to="/login"><Button text="LOGIN" /></Link> : null;
    let register = !props.isLoggedIn ? <Link to="/register"><Button text="REGISTER" /></Link> : null;
    const imgStyle = {
        position: "fixed",
        left: 16
    };
    return (
        <header className="header-container">
            <img src={logo} height="120px" style={imgStyle} />
            <h3 className="header-title">Abe tva react bilo mnogo qko be...</h3>
            <div className="header-buttons-container">
                {home}
                {login}
                {register}
            </div>
        </header>
    );
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    }
}

export default connect(mapStateToProps)(header);