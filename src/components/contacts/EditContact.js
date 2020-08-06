import React, { Component } from 'react';
import {Consumer} from '../../Context';
import uuid from 'uuid';
import TextInput from '../layout/TextInput';
import axios from 'axios';

export default class EditContact extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        error: {}
    }

    onStateChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    updateContact = async (dispatch, e) => {
        e.preventDefault();
        const id = this.props.match.params.id;
        const {name, email, phone} = this.state;
        if(name === ''){
            this.setState({error: {name: 'Name Is Required'}});
            return;
        }
        if(email === ''){
            this.setState({error: {email: 'Email Is Required'}});
            return;
        }
        if(phone === ''){
            this.setState({error: {phone: 'Phone Is Required'}});
            return;
        }

        const data = {
            id,
            name,
            email,
            phone
        }

        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, data);
        dispatch({type: 'UPDATE_CONTACT', payload: res.data});

        this.setState({
            name: '',
            email: '',
            phone: ''
        });

        this.props.history.push('/');
    }

    async componentDidMount(){
        const id = this.props.match.params.id;
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const contact = res.data;
        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone,
            error: {}
        })
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
                                <form onSubmit={this.updateContact.bind(this, dispatch)}>
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
                                        <input type="submit" value="Update Contact" className="btn btn-light btn-block" />
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
