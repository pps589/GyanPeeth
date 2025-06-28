import { initialUserState, UserState } from "../userState.state";

export const UserStateReducer = (state: UserState = initialUserState, action: any) => {
    switch(action.type) {
        default: return state;
    }
};