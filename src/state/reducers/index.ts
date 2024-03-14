import {combineReducers} from 'redux'
import repositoryReducer from './reposetoryReducer';

const reducers = combineReducers({
    repositories: repositoryReducer,
})

export type RootState = ReturnType<typeof reducers>

export default reducers;