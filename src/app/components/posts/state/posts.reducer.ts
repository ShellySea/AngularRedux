import { initialPosts } from './posts.state';
import { createReducer, on } from "@ngrx/store"
import { getPost } from './posts.action';


const _postReducer = createReducer(initialPosts,
    on(getPost, (state) => {
        return {
            ...state,
        }
    })
)

export function postReducer(state, action) {
    return _postReducer(state, action);
}