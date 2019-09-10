import React, { Component } from "react";
import { connect } from 'react-redux';
import { changePersonName, changeHorsePower, changeCarTyre, deleteTyre } from "./actions/ExampleActions"
import Button from "../UI/button/Button";

class ReduxExample extends Component {
    render() {
        // just to make it work... we are printing state in the console so we dont need to render anything...
        return (<div style={{height: "50vh", width: "50vw", alignContent: "center", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
            <Button onClick={() => this.props.changeName(1, "Gosho")} text="Change name of user to Gosho"/>
            <Button onClick={() => this.props.changeEngineHorsePower(1, "BMW", 3000)} text="Change bmw horsePower"/>
            <Button onClick={() => this.props.changeTyre(1, "BMW", "left-front")} text="Change bmw tyre"/>
            <Button onClick={() => this.props.deleteTyreFrom(1, "BMW", "right-front")} text="Remove front right tyre of bmw"/>
        </div>)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // start with something simple -> let's change the name of a user by id
        changeName: (id, name) => dispatch(changePersonName(id, name)),
        // let's go deeper -> change the horsepower of an engine of a car of a given user
        changeEngineHorsePower: (id, carMake, horsePower) => dispatch(changeHorsePower(id, carMake, horsePower)),
        // it appears we got a flat tyre... let's change it
        changeTyre: (id, carMake, tyreSide) => dispatch(changeCarTyre(id, carMake, tyreSide)),
        // we don't like one of tyres... let's send it to the abyss
        deleteTyreFrom: (id, carMake, tyreSide) => dispatch(deleteTyre(id, carMake, tyreSide))
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxExample);