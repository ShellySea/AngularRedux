
export interface CounterStateI {
    count: number;
    channelName: string;
}



export const initialCounterState: CounterStateI = {
    count: 0,
    channelName: 'Saily Channel'
}