import { INCREMENT, ADD } from './actions';
import { tassign } from 'tassign';
//will determine the shape of the store
export interface IAppState {
    counter: number;
    courses:Array<any>;
}

export const INITIAL_STATE: IAppState = {
    counter : 0,
    courses : [],
}

export function rootReducer(state: IAppState, action): IAppState {
    console.log("action ::: >> ",action);
    switch (action.type) {
        case INCREMENT: 
        // return { counter: state.counter + 1 }
        // return Object.assign({}, state, {counter:state.counter+1, isOnline:true}); // not typed safe
        // type safe version of Object.assign() => tassign
        return tassign(state, {counter: state.counter+1}); // it is type safe
        break;
        case ADD:
        return tassign(state, {courses: [...state.courses,action.value]});
    }
    return state;
}