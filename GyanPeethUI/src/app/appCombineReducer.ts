import { ActionReducerMap } from "@ngrx/store";
import { UserState } from "./account/store/userState.state";
import { UserStateReducer } from "./account/store/reducers/userState.reducer";

export interface AppState {
    userState: UserState
}

export const reducers: ActionReducerMap<AppState> = {
      userState: UserStateReducer
};