import {createStore} from 'redux';
import {bindActionCreators} from 'redux'

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED"

const orderCake = () => {
    return {
        type: "CAKE_ORDERED",
        quantity: 1,
    }
}

const restockCake = (qty) => {
    return {
        type: "CAKE_RESTOCKED",
        quantity: qty,
    }
} 

const initialState = {
    numOfCakes: 10,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CAKE_ORDERED:
            return {
                numOfCakes: state.numOfCakes - 1
            }
        case CAKE_RESTOCKED:
            return {
                numOfCakes: state.numOfCakes + action.quantity
            }
        default:
            return state;
    }
}

const store = createStore(reducer);
console.log("Initial state : ", store.getState());

const unsubscribe = store.subscribe(() => console.log("Updated state : ", store.getState()));

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockCake(3))

const action = bindActionCreators({orderCake, restockCake}, store.dispatch) // bindActionsCreators is not a preffered way of using dispatch.

action.orderCake()
action.orderCake()
action.orderCake()
action.restockCake(3)

unsubscribe();

