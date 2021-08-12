import React from 'react';
import {Switch,Route } from 'react-router';
import Home from './components/pages/home';
import Config from './components/pages/config';


export default () => {
    return(
        <switch>
            <Route exact path='/home'>
            <Home />
            </Route>

            <Route exact   path='/config'>
             <Config />
            </Route>

            <Route exact   path='/sair'>
           
            </Route>
        </switch>
    );
}