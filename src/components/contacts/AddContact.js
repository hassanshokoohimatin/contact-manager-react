import React, { Component } from 'react';
import {Consumer} from '../../Context';
import uuid from 'uuid';
import TextInput from '../layout/TextInput';
import axios from 'axios';

export default class AddContact extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        error: {}
    }

    onStateChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    addContact = (dispatch, e) => {
        e.preventDefault();
        const {name, email, phone} = this.state;
        if(name === ''){
            this.setState({error: {name: 'Name is required'}});
            return;
        }
        if(email === ''){
            this.setState({error: {email: 'Email is required'}});
            return;
        }
        if(phone === ''){
            this.setState({error: {phone: 'Phone is required'}});
            return;
        }
        const contact = {
            id: uuid.v4(),
            name,
            email,
            phone
        }

        axios.post('https://jsonplaceholder.typicode.com/users', contact)
             .then(res => {
                 dispatch({type: 'ADD_CONTACT', payload: res.data})
                })
             .catch(err => console.log(err))
        this.props.history.push('/'); 
    }
    render() {
        const {name, email, phone, error} = this.state;
        return(
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header">Add Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.addContact.bind(this, dispatch)}>
                                    <TextInput label="Name" name="name" value={name}
                                               placeholder="Enter Name"
                                               onChange={this.onStateChange}
                                               error={error.name} />
                                    
                                    <TextInput label="Email" name="email" value={email}
                                               placeholder="Enter Email"
                                               onChange={this.onStateChange}
                                               type="email" error={error.email} />

                                    <TextInput label="Phone" name="phone" value={phone}
                                               placeholder="Enter Phone"
                                               onChange={this.onStateChange}
                                               error={error.phone} />
                                    <div>
                                        <input type="submit" value="Add Contact" className="btn btn-light btn-block" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}
