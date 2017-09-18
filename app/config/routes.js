import React from 'react'
import Main from '../components/layouts/Main';
import Blank from '../components/layouts/Blank';

import MainView from '../views/users/Main';
import CreateView from '../views/users/create';
import MinorView from '../views/Minor';
import Home from '../views/Home';
import ShowUser from '../views/users/ShowUser';

import { Route, Router, IndexRedirect, browserHistory} from 'react-router';

export default (
    <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRedirect to="/users" />
                <Route path="users" component={MainView}> </Route>
                <Route path="minor" component={MinorView}> </Route>
                <Route path="user/create" component={CreateView}></Route>
                <Route path="user/show/:userid" component={ShowUser}></Route>
            </Route>
    </Router>
);