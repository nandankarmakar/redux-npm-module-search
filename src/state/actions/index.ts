interface SearchRepositoriesAction{
    type: 'search_repositories'
}

interface SearchRepositoriesSuccessAction{
    type: 'search_repositories_success',
    payload: string[]
}

interface SearchRepositoriesFailureAction {
    type: 'search_repository_error',
    payload: string
}

export type Action = SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesFailureAction

