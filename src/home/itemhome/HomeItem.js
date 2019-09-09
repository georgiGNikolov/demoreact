import React from "react";
import "./HomeItem.css"
import Button from "../../UI/button/Button"
import { deleteItem } from '../../store/actions/HomeActions';
import { connect } from 'react-redux';

const homeItem = props => {
    let item = props.item;
    return (
        <div className="item">
            <p>Name: {item.name}</p>
            <p>Width: {item.width}</p>
            <p>Height: {item.height}</p>
            <p>Description: {item.description}</p>
            <Button onClick={() => props.onDelete(item.id)} text="Delete"/>
        </div>
    );
}
const mapDispatchToProps = dispatch => {
    return {
        onDelete: id => dispatch(deleteItem(id))
    }
}
   

export default connect(null, mapDispatchToProps)(homeItem);