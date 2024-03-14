import axios from 'axios'
import { ActionType } from '../action-types/index';
import { Action } from '../actions';
import { Dispatch } from 'redux';

export const searchRepositories = (term: string) => {
    return async (dispatch : Dispatch<Action> )=> {
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES
        })

        try {
            const response = (await axios.get('https://registry.npmjs.org/-/v1/search', {
                params: {
                    text: term
                }
            })).data;
            const names = response.objects.map((result: any)=> {return result.package.name})

            dispatch({
                type : ActionType.SEARCH_REPOSITORIES_SUCCESS,
                payload: names
            })
            
        } catch (err) {
            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_FAILURE,
                payload: 'there has been an error'
            })
        }
    }
}