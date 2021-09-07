import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import Products from './pages/Products';
import AboutUs from './pages/Aboutus';
import Footer from './components/Footer';
// import order, { Order } from './models/order';
import Order from './pages/Order';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={id:"", clientadress:"",clientemail:"",totalprice:""};
  }
  submitOrder(event){
    alert(this.state.id); event.preventDefault();
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/products' component={Products} />
            <Route path='/aboutus' component={AboutUs} />
            <Route path='/order' component={Order} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}
