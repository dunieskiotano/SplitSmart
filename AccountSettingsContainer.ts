import { connect } from 'react-redux';
import {
    updateUsername, updateDisplayName, updatePassword, updateFirstName, updateLastName, updateEmail,
    updateProfilePicture, updatePhoneNumber, deactivateAccount, clearMessage
} from '../../actions/AccountSettingsActions';
import { IState } from '../../reducers/index';
import { AccountSettingsComponent } from '../AccountSettings/AccountSettingsComponent';
//container
const mapStateToProps = (state: IState) => {
    return {
        accountSettings: state.accountSettings
    }
}
const mapDispatchToProps = {
    updateUsername,
    updateDisplayName,
    updatePassword,
    updateFirstName,
    updateLastName,
    updateEmail,
    updateProfilePicture,
    updatePhoneNumber,
    deactivateAccount,
    clearMessage
}
export default connect(mapStateToProps, mapDispatchToProps)(AccountSettingsComponent);