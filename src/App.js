import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Contacts from './components/contacts';
import Header from './components/Header';

class App extends Component{
    render(){
        return(
            <div className="App">
                <Header />
                <div className="container">
                    <Contacts />
                </div>
            </div>
        )
    }
}

export default App;