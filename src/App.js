import React, {Component} from 'react';
import Cart from './component/cart/Cart'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import './indexx.css'
import Home from './component/test'
import TrackOrder from './component/bigboy/track';
import AddressForm from './component/bigboy/Form/signup';
import ClotheForm from './component/bigboy/Form/clotheform';
import Chekout from './component/checkOut/chekout';
import Success from './component/checkOut/success';
import Viewitem from './component/bigboy/viewItem';


class App extends Component {

  constructor(props){
    super(props)
    this.state = { }
  }

  render(){

    return (
      <Router>
       <div >
         <Switch>
           <Route exact path='/' component={Home} />

             <Route exact path='/trackorder' component={TrackOrder} />

             <Route exact path='/register' component={AddressForm} />

             <Route exact path='/upload' component={ClotheForm} />

             <Route exact path='/view/:id' component={Viewitem}/>

             <Route exact path='/cart' component={Cart} />

             <Route exact path='/success' component={Success} />

            <Route exact path='/checkout' component={Chekout} />
         </Switch>
         
         </div>
      </Router>

        
    );
  }
  
}

export default App;
