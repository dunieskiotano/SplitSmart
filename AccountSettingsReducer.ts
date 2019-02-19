import { IAccountSettingsState } from '.';
import { Users } from '../models/Users';
import { accountSettingsTypes } from '../actions/AccountSettingsActions';

const initialState: IAccountSettingsState = {
    username: ' ',
    displayname: ' ',
    password: ' ',
    firstname: ' ',
    lastname: '',
    email: ' ',
    phonenumber: ' '
}

export const accountSettingsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case accountSettingsTypes.UPDATE_USERNAME:
            return {
                ...state,
                username: action.payload.username
            }
        case accountSettingsTypes.UPDATE_DISPLAYNAME:
            return {
                ...state,
                displayName: action.payload.displayName
            }
        case accountSettingsTypes.UPDATE_PASSWORD:
            return {
                ...state,
                password: action.payload.password
            }
        case accountSettingsTypes.UPDATE_FIRST_NAME:
            return {
                ...state,
                firstname: action.payload.firstname
            }
        case accountSettingsTypes.UPDATE_LAST_NAME:
            return {
                ...state,
                lastname: action.payloadlastname
            }
        case accountSettingsTypes.UPDATE_EMAIL:
            return {
                ...state,
                email: action.payload.email
            }
        case accountSettingsTypes.UPDATE_PHONE_NUMBER:
            return {
                ...state,
                phoneNumber: action.payload.phoneNumber
            }
        case accountSettingsTypes.UPDATE_PROFILE_PICTURE:
            return {
                ...state,
                picture: action.payload.picture
            }
        case accountSettingsTypes.DEACTIVATE_ACCOUNT:
            return {

            }

    }
    return state;
}//state returned here 


