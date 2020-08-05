import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Contacts from './components/contacts/contacts';
import Header from './components/layout/Header';
import {Provider} from './Context';
import AddContact from './components/contacts/AddContact';

class App extends Component{
    render(){
        return(
            <Provider>
                <div className="App">
                    <Header />
                    <div className="container">
                        <AddContact />
                        <Contacts />
                    </div>
                </div>
            </Provider>
        )
    }
}

export default App;