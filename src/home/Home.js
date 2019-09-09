import React, { Component } from 'react';
import './Home.css';
import NewItemForm from './newitemform/NewItemForm';
import HomeItemsList from './HomeItemsList';
import { isLoaded, isEmpty } from 'react-redux-firebase'
import { connect } from 'react-redux'

function home(props) {
    return(
            <div className="home-container">
                <h1 className="home-header"> A list of stuff (I couldn't come up with anything creative) </h1>
                <NewItemForm/>
                <HomeItemsList/>
            </div>
        );
}


export default home;