import { Reducer } from "react";
import { combineReducers } from "redux";
import { BasicActions, BasicActionTypes } from "./actions";

export interface IBasicState {
    property: any;
}

export const initialBasicState: IBasicState = {
    property: null,
};

const basicReducer: Reducer<IBasicState, BasicActions> = (state = initialBasicState, action) => {
    switch (action.type) {
        case BasicActionTypes.ANY: {
            return {
                ...state,
                property: action.property,
            };
        }
        default:
            return state;
    }
};
// Create the root reducer
const rootReducer = combineReducers({
    basicState: basicReducer,
});
export default rootReducer;
