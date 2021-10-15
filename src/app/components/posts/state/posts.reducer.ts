import { initialPosts } from './posts.state';
import { createReducer, on } from "@ngrx/store"
import { addPost, getPost } from './posts.action';


const _postReducer = createReducer(initialPosts,
    on(getPost, (state) => {
        return {
            ...state,
        }
    }),
    on(addPost, (state, action) => {
        console.log(action)
        let post = { ...action.postData };

        post.id = (state.posts.length + 1);

        return {
            ...state,
            posts: [...state.posts, post],
        };
    })
)

export function postReducer(state, action) {
    return _postReducer(state, action);
}