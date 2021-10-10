import { createAction, props } from "@ngrx/store";

export const increment = createAction('Inc');
export const decrement = createAction('Dec');
export const reset = createAction('Res');

export const customIncrement = createAction('customInc', props<{ cnum: number }>());
