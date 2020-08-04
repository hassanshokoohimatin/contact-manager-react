import React, {Component} from 'react';

const Context = React.createContext();
const reducer = (state, action) => {
    switch(action.type){
        case "DELETE_CONTACT": 
            return{
                ...state,
                contacts: state.contacts.filter(contact => 
                    contact.id !== action.payload)
            }
        default: return null;
    }
}

export class Provider extends Component{
    
    state = {
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
        ],
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
    }

    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;