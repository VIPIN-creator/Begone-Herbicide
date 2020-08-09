import React, {Component} from 'react';
import Home from './HomeComponent';
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import Header from './HeaderComponent';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import GalleryAndProduct from './GalleryAndProductComponent';
import Footer from './FooterComponent';
import {items} from "../shared/Gallery";
import {products} from "../shared/Products";
import InvestInUs from './InvestInUs';

class Main extends Component{
    render() {
        return(
            <div>
            <Header />
            <Switch>
                <Route path="/home" component = {() => <Home />}/>
                <Route path="/gallery" component = {() => <GalleryAndProduct name = "Gallery" items = {items} />}/>
                <Route path="/about" component = {() => <About />}/>
                <Route path="/products" component = {() => <GalleryAndProduct name ="Products" items = {products} />}/>
                <Route path="/contact" component = {() => <Contact />}/>
                <Route path="/invest" component = {() => <InvestInUs />}/>
                <Redirect to ="/home" />
            </Switch>
            <Footer/>
            </div>
        );
    }
}

export default withRouter(Main);