
import React from "react";


const ProfileContacts = (props) => {
    return (
        <div>
            <b> Contacts: </b> {Object.keys(props.contacts).map((key) => {
            return <Contact key={key} contactTitle={key} contactValue={props.contacts[key]}/>
        })}
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return (
        <>
        <span>
            <a rel="nofollow" target="_blank" title="Facebook" href="123"> </a>
        </span>

         <div> <b> {contactTitle} : </b> {contactValue} </div>

        </>
    )
}


export default ProfileContacts;
