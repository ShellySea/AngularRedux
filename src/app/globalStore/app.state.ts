import { CounterStateI } from "../components/counter/state/counter.state";
import { PostsI } from "../components/posts/state/posts.state";
import { counterReducer } from '../components/counter/state/counter.reducer';
import { postReducer } from "../components/posts/state/posts.reducer";


export interface AppState {
    gcounter: CounterStateI,
    gpost: PostsI
}


/*
StoreModule.forRoot({ counterStore: counterReducer }),
Instead of this we are making below object as one thing to insert in appReducer
*/
export const appReducer = {
    counterStore: counterReducer,
    postStore: postReducer
}