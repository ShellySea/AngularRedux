import { createAction } from "@ngrx/store";

export const getPost = createAction('GETPOST');

export const addPost = createAction('ADDPOST');

export const deletePost = createAction('DELETEPOST');