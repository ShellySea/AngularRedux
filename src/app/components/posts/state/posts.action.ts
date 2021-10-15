import { createAction, props } from "@ngrx/store";
import { PostInterface, PostsI } from "./posts.state";

export const getPost = createAction('GETPOST');

export const addPost = createAction('ADDPOST', props<{ postData: PostInterface }>());

export const editPost = createAction('EDITPOST', props<{ postEData: PostInterface }>());

export const deletePost = createAction('DELETEPOST');