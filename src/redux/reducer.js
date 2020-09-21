import { combineReducers } from "redux";
const initialState = {
    city: {
        code: 1,
        name: '北京'
    }
};

function cityHandle (city = initialState.city, action) {
    switch (action.type) {
        case "CHANGE_CITY":
            return action.city;
        case "GET_CITY":
            return city;
        default:
            return city;
    }
}

// function changeCity (city = initialState.city, action) {

// }

const reducer = combineReducers({
    cityHandle
});

export default reducer;