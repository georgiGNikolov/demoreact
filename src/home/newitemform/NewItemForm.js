import React, { Component } from "react";
import Input from "../../UI/input/Input";
import Button from "../../UI/button/Button";
import "./NewItemForm.css"
import { addNewItem } from '../../store/actions/HomeActions';
import { connect } from 'react-redux';

class NewItemForm extends Component {

    state = {
        item: {
            name: "",
            height: "",
            width: "",
            description: ""
        },
        errorMessage: ""
    }

    setName = event => {
        const value = event.target.value;
        const item = { ...this.state.item };
        item.name = value;
        this.setState({ item });
    }

    setHeight = event => {
        const value = event.target.value;
        const item = { ...this.state.item };
        item.height = value;
        this.setState({ item });
    }

    setWidth = event => {
        const value = event.target.value;
        const item = { ...this.state.item };
        item.width = value;
        this.setState({ item });
    }

    setDescription = event => {
        const value = event.target.value;
        const item = { ...this.state.item };
        item.description = value;
        this.setState({ item });
    }

    onNewItem = event => {
        event.preventDefault();

        if (!this.isInputValid(this.state.item)) return;

        this.props.onNewItem(this.state.item);
        const newItem = {
            name: "",
            height: "",
            width: "",
            description: ""
        };
        this.setState({ item: newItem, errorMessage: "" });
    }

    isInputValid = item => {
        if (item.name === null || item.name === ""
            || item.width === null || item.width === ""
            || item.height === null || item.height === ""
            || item.description === null || item.description === ""
        ) {
            this.setState({errorMessage: "All fields are mandatory"});
            return false;
        }
        const regex = /^[0-9\b]+$/;
        if (typeof item.name != "string" || regex.test(item.name)) {
            this.setState({errorMessage: "Invalid name"});
            return false;
        }
        
        if (parseInt(item.width) != item.width || item.width <= 0) {
            this.setState({errorMessage: "The width can only be a positive number"});
            return false;
        }

        if (parseInt(item.height) != item.height || item.height <= 0) {
            this.setState({errorMessage: "The height can only be a positive number"});
            return false;
        }

        return true;
    }

    render() {
        return (
            <form >
                <h2>Add a new item</h2>
                <div className="add-item-form">
                    <Input type="text" placeholder="Name" onChange={this.setName} value={this.state.item.name} />
                    <Input type="text" pattern="[0-9]*" placeholder="Height" onChange={this.setHeight} value={this.state.item.height} />
                    <Input type="text"  pattern="[0-9]*" placeholder="Width" onChange={this.setWidth} value={this.state.item.width} />
                    <Input type="text" placeholder="Description" onChange={this.setDescription} value={this.state.item.description} />
                    <Button onClick={this.onNewItem} text="Add"></Button> 
                </div>
                {this.state.errorMessage != "" ? <h1 className="error">{this.state.errorMessage}</h1> : null}
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onNewItem: item => dispatch(addNewItem(item))
    }
}

export default connect(null, mapDispatchToProps)(NewItemForm);