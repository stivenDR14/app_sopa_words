import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './NotFound';
import Principal from './Principal';


export default function Navegacion (){
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Principal} />
          <Route component={NotFound} />
        </Switch>
    </BrowserRouter>

    );

}
