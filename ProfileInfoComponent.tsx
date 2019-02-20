import React from 'react'
import '../App.css';

interface IProfileInfo {
    username: "dunieskiotano",//Users
    displayname: "dunieski",//GroupUser
    password: "password",//Users,
    firstname: 'Dunieski',
    lastname: 'Otano',
    email: "dunieski@gmail.com",//Users,
    phonenumber: '7684949302',//Users,
}

export class ProfileInfoComponent extends React.Component<IProfileInfo, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="surroundingBox">
                <h1>Profile</h1>
                <div>
                    <img src="" width="" height=""></img>
                </div>
                <label>{this.props.username}</label>
                <label>{this.props.displayname}></label>
                <label>{this.props.password}></label>
                <label>{this.props.firstname}></label>
                <label>{this.props.lastname}></label>
                <label>{this.props.email}></label>
                <label>{this.props.phonenumber}></label>
            </div>
            // This goes in the App.css
            // .surroundingBox{
            //     box-shadow: 0 16px 16px black;
            //     background-color: white;
            //     font-family: Helvetica;
            // }//
        )
    }
}