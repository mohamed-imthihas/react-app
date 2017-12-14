import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SelectImage from './components/SelectImage'
import SelectSize from './components/SelectSize'
import GamePage from './components/GamePage'
import store from './store';
import {Provider} from 'react-redux';
import { Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}> 
       <BrowserRouter>
        <div className='container'>
            <Route path='/' exact component={App} />
            <Route path='/imageSelect' component={SelectImage}/>
            <Route path='/gridSelect' component={SelectSize}/>
            <Route path='/gamePage' component={GamePage}/>
        </div>
    </BrowserRouter>
    </Provider> ,
     document.getElementById('root'));