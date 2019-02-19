import React from 'react';


interface IAccountSettingsProps {
    username: "dunieskiotano",//User
    displayname: "dunieski",//GroupUser
    password: "password",//User,
    firstname: 'Dunieski',
    lastname: 'Otano',
    email: "dunieski@gmail.com",//User,
    phonenumber: '7684949302',//User,
    updateUsername: (username: string) => void,
    updateDisplayName: (displayName: string) => void,
    updatePassword: (password: string) => void,
    updateFirstName: (firstname: string) => void,
    updateLastName: (lasttname: string) => void,
    updateEmail: (email: string) => void,
    updateProfilePicture: (picture: URL) => void,
    updatePhoneNumber: (phone: string) => void,
    deactivateAccount: () => void,
    clearMessage: () => void
}

export class AccountSettingsComponent extends React.Component<IAccountSettingsProps, any>{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.clearMessage();
    }

    updateUsername = (event) => {
        this.props.updateUsername(event.target.value)
    }

    updateDisplayName = (event) => {
        this.props.updateDisplayName(event.target.value);
    }
    updatePassword = (event) => {
        this.props.updatePassword(event.target.value);
    }
    updateFirstName = (event) => {
        this.props.updateFirstName(event.target.value);
    }
    updateLastName = (event) => {
        this.props.updateLastName(event.target.value);
    }
    updateEmail = (event) => {
        this.props.updateEmail(event.target.value);
    }
    updatePhoneNumber = (event) => {
        this.props.updatePhoneNumber(event.target.value);
    }
    deactivateAccount = () => {
        this.props.deactivateAccount();
    }

    render() {//renders here 
        return (
            <div>
                <p>{this.props.username}</p>
                <p>{this.props.displayname}></p>
                <p>{this.props.password}></p>
                <p>{this.props.firstname}></p>
                <p>{this.props.lastname}></p>
                <p>{this.props.email}</p>
                <p>{this.props.phonenumber}</p>
            </div>

        )
    }
}