import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Contact from './components/contact';
import Header from './components/Header';

class App extends Component{
    render(){
        return(
            <div className="App">
                <Header />
                <div className="container">
                    <Contact name="Ali Mohammadi" email="ali@gmail.com" phone="123456789" />
                    <Contact name="Hassan Shokoohi" email="hassan@gmail.com" phone="123456789" />
                    <Contact name="Amin Hoseyni" email="amin@gmail.com" phone="123456789" />
                </div>
            </div>
        )
    }
}

export default App;