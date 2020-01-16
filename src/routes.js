import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './views/login';
import Main from './views/main';

function routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/dev/:id" component={Main} />
        </BrowserRouter>
    );
}

export default routes;