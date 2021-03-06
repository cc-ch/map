import React from 'react';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Bundle from './Bundle';

import MapStatic from 'bundle-loader?lazy&name=map!pages/Map/Map';
import Unity from 'bundle-loader?lazy&name=unity!pages/Unity/unity';
import Charts from 'pages/Charts/Charts';

const Loading = function () {
    return <div>Loading...</div>
};

const createComponent = (component) => (props) => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props} /> : <Loading/>
        }
    </Bundle>
);

const getRouter = () => (
    <Router>
        <div>
            <Charts />
            <Switch>
                <Route exact path="/" component={createComponent(MapStatic)}/>
                <Route path="/unity" component={createComponent(Unity)}/>
                {/* <Route path="/charts" component={createComponent(Charts)}/> */}
            </Switch>
        </div>
    </Router>
);

export default getRouter;