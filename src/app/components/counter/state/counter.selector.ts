import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterStateI } from "./counter.state";
export const COUNTER_STATE_NAME = 'counterStore';

// 'counterStore' name below should be similar to the one in counter module file
const getCounterState = createFeatureSelector<CounterStateI>(COUNTER_STATE_NAME);


export const getCounter = createSelector(getCounterState, state => {
    return state.count;
})

export const getChannelNm = createSelector(getCounterState, state => {
    return state.channelName;
})