import counter from './reducers/counter';

export default function combineReducers(state = {}, action) {
    return {
        coordinate: counter(state.coordinate, action)
    }
}