import React from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../state'
import { useTypedSelect } from '../hooks/useTypedSelector'

const RepositoryList: React.FC = () => {
    const [term, setTerm] = React.useState<string>('')
    const dispatch = useDispatch();

    const {data, error, loading} = useTypedSelect((state)=> state.repositories)

    const onSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
        dispatch(actionCreators.searchRepositories(term))
    }
  return (
    <div>
        <form onSubmit={onSubmit}>
            <input type='text' value = {term} onChange={e=> setTerm(e.target.value)}/>
            <button>Search</button>
        </form>
        {error && <h3>{error}</h3>}
        {loading && <h3>Loading....</h3>}
        {!error && !loading && 
        <ul>
            {data.map((name)=> <li key={name}>{name}</li>)}
        </ul>
        }
    </div>
  )
}

export default RepositoryList