import coordinate from './reducers/counter';

export default function combineReducers(state = {}, action) {
    return {
        coordinate: coordinate(state.coordinate, action)
    }
}