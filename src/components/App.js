import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Main from './Main';
import Footer from './Footer';
import Header from './Header';
import Catalog from './Catalog';

class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <div className='wrapper'>
                    <Header/>
                    <Route path='/' exact component={Main}/>
                    <Route path='/catalog/:type' component={Catalog}/>
                    {/* <Route path='/product/:id' component={Product}/>
                    <Route path='/basket' component={Product}/> */}
                    <Footer/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;