import { Action } from "../actions";
import {ActionType} from '../action-types/index';
export interface RepositoryState {
    loading: boolean;
    error: string | null;
    data: string[]
}

const initialState = {

    loading: false,
    data: [],
    error: null
}


const reducer=(state: RepositoryState = initialState, action: Action): RepositoryState=> {
    switch (action.type) {
        case ActionType.SEARCH_REPOSITORIES:
            return {loading: true, error: null, data: []}
        case ActionType.SEARCH_REPOSITORIES_SUCCESS:
            return {loading: false, error: null, data: action.payload}
        case ActionType.SEARCH_REPOSITORIES_FAILURE:
            return {loading: false, error: action.payload, data: []}    
        default:
            return state
    }
}

export default reducer;