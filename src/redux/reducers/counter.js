import { BEIJING, SHANGHAI, NANJING, RESET } from '../actions/counter';
import axios from 'axios';

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
        case BEIJING:
            return {
                count: [4.29446, 50.858182]
            };
        case SHANGHAI:
            return {
                count: [122.29446, 68.858182]
            };
        case NANJING:
            return {
                count: [102.29446, 68.858182]
            };
        case RESET:
            return {
                count: response.data.count
            };
        default:
            return state
    }
}