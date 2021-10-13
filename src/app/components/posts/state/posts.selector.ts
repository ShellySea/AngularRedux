import { createSelector } from '@ngrx/store';
import { createFeatureSelector } from '@ngrx/store';
import { PostsI } from './posts.state';

const postFeatureSel = createFeatureSelector<PostsI>('postStore');

export const postSelector = createSelector(postFeatureSel, state => {
    return state.posts;
})