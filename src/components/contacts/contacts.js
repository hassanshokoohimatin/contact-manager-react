import React, { Component } from 'react';
import Contact from './contact';
import {Consumer} from '../../Context';

class Contacts extends Component {
    render() {
        return(
            <Consumer>
                {value => {
                    return (
                        <React.Fragment>
                            <h1 className="display-4"><span className="text-danger">Contact</span> List</h1>
                            {value.contacts.map(contact => (
                                <Contact key={contact.id} contact={contact} />
                                                            )
                                                )
                            }
                        </React.Fragment>
                    )
                }
                }
            </Consumer>
        )
    }
}

export default Contacts;
