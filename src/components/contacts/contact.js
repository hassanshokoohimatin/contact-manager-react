import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Consumer} from '../../Context';

class Contact extends Component {

    constructor(){
        super();
        this.state = {
            showInfo: false
        }
    }

    showClick = (e) => {
        this.setState({showInfo: !this.state.showInfo})
    }

    deleteContact = (id, dispatch) => {
        dispatch({type: "DELETE_CONTACT", payload: id})
    }
    render() {
        const {id, name, email, phone} = this.props.contact;
        const {showInfo} = this.state;
        return (

            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return(
                        <div className="card card-body mb-3">
                            <h4 className="mb-3">{name}
                            <i onClick={this.showClick} style={{cursor: "pointer"}}>-</i>
                            <i className="float-right text-danger" 
                                style={{cursor: "pointer"}} 
                                onClick={this.deleteContact.bind(this, id, dispatch)}>
                                delete
                            </i>
                            </h4>
                                    {showInfo ? 
                                        <ul className="list-group">
                                            <li className="list-group-item">Email: {email}</li>
                                            <li className="list-group-item">Phone: {phone}</li>
                                        </ul>
                                            :
                                        null
                                    }
                    
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
}

export default Contact;
