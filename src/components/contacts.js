import React, { Component } from 'react';
import Contact from './contact';

class Contacts extends Component {
    constructor(){
        super();
        this.state = {
            contacts: [
                {
                    id: 1,
                    name: 'Hassan Shokoohi',
                    email: 'hassan.shokoohimatin@gmail.com',
                    phone: '09127614429'
                },
                {
                    id: 2,
                    name: 'Soren Shokoohi',
                    email: 'soren.shokoohimatin@gmail.com',
                    phone: '09127614429'
                },
                {
                    id: 3,
                    name: 'Ali Mohammadi',
                    email: 'ali@gmail.com',
                    phone: '09127614429'
                }
            ]
        }
    }

    deletePerson = (id) => {
        let newContacts = this.state.contacts.filter(contact => contact.id !== id);
        this.setState({contacts: newContacts});
    }
    render() {
        return (
            <React.Fragment>
                {this.state.contacts.map(contact => (

                    <Contact key={contact.id} contact={contact}
                        deleteContact={this.deletePerson.bind(this, contact.id)} />

                ))
                }
            </React.Fragment>
        )
    }
}

export default Contacts;
