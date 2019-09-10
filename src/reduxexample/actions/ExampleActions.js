import {
    CHANGE_PERSON_NAME,
    CHANGE_CAR_POWER,
    CHANGE_CAR_TYRE,
    DELETE_CAR_TYRE
  } from './ExampleActionTypes'

export const changePersonName = (id, name) => {
    return {
        type: CHANGE_PERSON_NAME,
        id,
        name
    }
}

export const changeHorsePower = (id, make, horsePower) => {
    return { 
        type: CHANGE_CAR_POWER,
        id,
        make,
        horsePower
    }
}

export const changeCarTyre = (id, make, tyreSide) => {
    return {
        type: CHANGE_CAR_TYRE,
        id,
        make,
        tyreSide
    }
}

export const deleteTyre = (id, make, tyreSide) => {
    return {
        type: DELETE_CAR_TYRE,
        id,
        make,
        tyreSide
    }
}