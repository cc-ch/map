import { INCREMENT, DECREMENT, RESET } from '../actions/counter';

/*
 * 初始化state
 */

const initState = {
    count: [2.29446, 48.858182]
};
/*
 * reducer
 */
export default function reducer(state = initState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                count: [4.29446, 50.858182]
            };
        case DECREMENT:
            return {
                count: [122.29446, 68.858182]
            };
        case RESET:
            return {
                count: [102.29446, 38.858182]
            };
        default:
            return state
    }
}