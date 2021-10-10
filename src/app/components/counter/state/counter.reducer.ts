import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./counter.actions";
import { initialCounterState } from "./counter.state";


const _counterReducer = createReducer(initialCounterState,
    on(increment, (state) => {
        return {
            ...state,
            count: state.count + 1
        }
    }),
    on(decrement, (state) => {
        return {
            ...state,
            count: state.count - 1
        }
    }),
    on(reset, (state) => {
        return {
            ...state,
            count: 0
        }
    })
);

export function counterReducer(state, action) {
    return _counterReducer(state, action);
}