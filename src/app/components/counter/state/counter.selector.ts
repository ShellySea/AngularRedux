import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterStateI } from "./counter.state";


const getCounterState = createFeatureSelector<CounterStateI>('counterStore');


export const getCounter = createSelector(getCounterState, state => {
    return state.count;
})

export const getChannelNm = createSelector(getCounterState, state => {
    return state.channelName;
})