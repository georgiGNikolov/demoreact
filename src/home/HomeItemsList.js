import React from 'react';
import HomeItem from './itemhome/HomeItem';
import './Home.css';
import { connect } from 'react-redux';
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import LoadingIndicator from "../UI/loading/LoadingIndicator"

const homeItemsList = props => {
    if(props.items === undefined) {
        return <LoadingIndicator/>
    }
    const items = props.items.map((item, index) => {
        return <HomeItem item={item} key={index + 1} onDelete={id => props.onDeleteItem(id)} />
    });
    return (
        <React.Fragment>
            {props.items.length === 0 ? <h1>You don't have any items... Try adding one!</h1> : <div className="home-items">{items}</div>}
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.firestore.ordered.products
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'products' }
    ])
)(homeItemsList);