import { initialPosts } from './posts.state';
import { createReducer, on } from "@ngrx/store"
import { addPost, deletePost, editPost, getPost } from './posts.action';


const _postReducer = createReducer(initialPosts,
    on(getPost, (state) => {
        return {
            ...state,
        }
    }),
    on(addPost, (state, action) => {
        let post = { ...action.postData };

        post.id = (state.posts.length + 1);

        return {
            ...state,
            posts: [...state.posts, post],
        };
    }),
    on(editPost, (state, action) => {
        const updatedPost = state.posts.map(post => {
            if (post.id === action.postEData.id) {
                return action.postEData;
            } else {
                return post;
            }
        });
        return {
            ...state,
            posts: [...updatedPost]
        }
    }),
    on(deletePost, (state, action) => {
        let updatedPostList = state.posts.filter((obj) => {
            return obj.id !== action.postDData.id
        });
        return {
            ...state,
            posts: [...updatedPostList]
        }
    })
)

export function postReducer(state, action) {
    return _postReducer(state, action);
}