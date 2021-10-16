import { createSelector } from '@ngrx/store';
import { createFeatureSelector } from '@ngrx/store';
import { PostsI } from './posts.state';
export const POST_STATE_NAME = 'postStore';

const postFeatureSel = createFeatureSelector<PostsI>(POST_STATE_NAME);

export const postSelector = createSelector(postFeatureSel, state => {
    return state.posts;
})

export const postSelectorById = createSelector(postFeatureSel, (state, props) => {
    return state.posts.find(post => {
        if (post.id === props.id) {
            return post;
        }
    })
})