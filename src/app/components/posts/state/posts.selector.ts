import { createSelector } from '@ngrx/store';
import { createFeatureSelector } from '@ngrx/store';
import { PostsI } from './posts.state';

const postFeatureSel = createFeatureSelector<PostsI>('postStore');

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