import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Consumer} from '../../Context';
import axios from 'axios';

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
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
             .then(res => {
                dispatch({type: "DELETE_CONTACT", payload: id})
             })
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
                            <i  className="fas fa-sort-down"
                                onClick={this.showClick} style={{cursor: "pointer"}}></i>
                            <i className="float-right text-danger fas fa-times" 
                                style={{cursor: "pointer"}} 
                                onClick={this.deleteContact.bind(this, id, dispatch)}>
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
