import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Contacts from './components/contacts/contacts';
import Header from './components/layout/Header';
import {Provider} from './Context';
import AddContact from './components/contacts/AddContact';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import About from './components/pages/About';
import NotFound from './components/pages/NotFound'; 
import EditContact from './components/contacts/EditContact';

class App extends Component{
    render(){
        return(
            <Provider>
                <Router>
                    <div className="App">
                        <Header />
                        <div className="container">
                            <Switch>
                                <Route exact path="/" component={Contacts} />
                                <Route exact path="/about" component={About} />
                                <Route exact path="/contact/add" component={AddContact} />
                                <Route exact path="/contact/edit/:id" component={EditContact} />
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default App;