import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterStateI } from "./counter.state";

// 'counterStore' name below should be similar to the one in app module file
const getCounterState = createFeatureSelector<CounterStateI>('counterStore');


export const getCounter = createSelector(getCounterState, state => {
    return state.count;
})

export const getChannelNm = createSelector(getCounterState, state => {
    return state.channelName;
})