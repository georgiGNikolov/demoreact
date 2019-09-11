import {
    CHANGE_PERSON_NAME,
    CHANGE_CAR_POWER,
    CHANGE_CAR_TYRE,
    DELETE_CAR_TYRE
} from '../actions/ExampleActionTypes'

const initState = {
    users: [
        {
            id: 1,
            name: "Pesho",
            age: 20,
            cars: [
                {
                    make: "BMW",
                    color: "black",
                    model: "e36",
                    engine: {
                        horsePower: 200,
                        torque: 150,
                    },
                    tyres: [
                        {
                            side: "left-front",
                            tyreMake: "Dunlop",
                            width: 225,
                            size: 17
                        },
                        {
                            side: "right-front",
                            tyreMake: "Dunlop",
                            width: 225,
                            size: 17
                        }, {
                            side: "left-rear",
                            tyreMake: "Dunlop",
                            width: 225,
                            size: 17
                        },
                        {
                            side: "left-rear",
                            tyreMake: "Dunlop",
                            width: 225,
                            size: 17
                        }
                    ]
                },
                {
                    make: "Mecedes",
                    color: "white",
                    model: "124",
                    engine: {
                        horsePower: 300,
                        torque: 200
                    },
                    tyres: [
                        {
                            side: "left-front",
                            tyreMake: "Dunlop",
                            width: 225,
                            size: 17
                        },
                        {
                            side: "right-front",
                            tyreMake: "Dunlop",
                            width: 225,
                            size: 17
                        }, {
                            side: "left-rear",
                            tyreMake: "Dunlop",
                            width: 225,
                            size: 17
                        },
                        {
                            side: "left-rear",
                            tyreMake: "Dunlop",
                            width: 225,
                            size: 17
                        }
                    ]
                }
            ]
        }
    ]
}

const exampleReducer = (state = initState, action) => {
    switch (action.type) {
        case CHANGE_PERSON_NAME: {
            const users = [...state.users].map((user, index) => {
                user.cars = [...user.cars];
                user.cars.map(car => {
                    car.engine = { ...car.engine };
                    car.tyres = [...car.tyres];
                    car.tyres.map(tyre => {
                        return { ...tyre };
                    })
                    return { ...car };
                })
                if (user.id === action.id) {
                    return { ...state.users[index], name: action.name };
                } else {
                    return { ...user };
                }
            });
            return {
                ...state,
                users
            }
        }

        case CHANGE_CAR_POWER: {
            const users = [...state.users].map(user => {
                user.cars = [...user.cars];
                user.cars.map(car => {
                    if (car.make === action.make && user.id === action.id) {
                        car.engine = { ...car.engine, horsePower: action.horsePower };
                    } else {
                        car.engine = { ...car.engine };
                    }
                    car.tyres = [...car.tyres];
                    car.tyres.map(tyre => {
                        return { ...tyre };
                    })
                    return { ...car };
                })
                return { ...user };
            });
            return {
                ...state,
                users
            }
        }

        case CHANGE_CAR_TYRE: {
            const users = [...state.users].map(user => {
                if (user.id !== action.id) { return {...user} };
                user.cars = [...user.cars];
                const cars = user.cars.map(car => {
                    car.engine = { ...car.engine };
                    car.tyres = [...car.tyres];
                    const tyres = car.tyres.map(tyre => {
                        if (tyre.side === action.tyreSide && car.make === action.make && user.id === action.id) {
                            return { ...tyre, tyreMake: "Michellin" };
                        } else {
                            return { ...tyre };
                        }
                    })
                    return { ...car, tyres };
                })
                return { ...user, cars };
            });
            
            return {
                ...state,
                users
            }
        }

        case DELETE_CAR_TYRE: {
            const users = [...state.users].map(user => {
                user.cars = [...user.cars];
                user.cars.map(car => {
                    car.engine = { ...car.engine };
                    car.tyres = [...car.tyres];
                    if (car.make === action.make && user.id === action.id){
                        car.tyres = car.tyres.filter(tyre => tyre.side != action.tyreSide)
                    } else car.tyres = car.tyres.map(tyre =>{return {...tyre}})
                    return { ...car }
                })
                return { ...user };
            });
            return {
                ...state,
                users
            }
        }

        default: return state;
    }
};

export default exampleReducer;