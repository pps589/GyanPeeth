export interface UserState {
    userDetails?: {
        userName: string,
        email: string,
        mobileNumber: string,
    },
    userPermission?: {
        isPremium: boolean,
    }
    isLoggedIn: boolean
}

export const initialUserState: UserState = {
    isLoggedIn: false
};