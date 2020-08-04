import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Contacts from './components/contacts';
import Header from './components/Header';
import {Provider} from './Context';

class App extends Component{
    render(){
        return(
            <Provider>
                <div className="App">
                    <Header />
                    <div className="container">
                        <Contacts />
                    </div>
                </div>
            </Provider>
        )
    }
}

export default App;