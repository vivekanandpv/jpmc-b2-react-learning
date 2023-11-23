import * as React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar from "./pages/Navbar";
import RestPlayground from "./pages/RestPlayground";
import StatePlayground from "./pages/StatePlayground";
import Login from "./pages/Login";

const App = (props) => {
    return (
        <>
            <Navbar />
            <div className="p-5">
                <h3>Hello React</h3>
                <hr/>
                <Switch>
                    <Redirect exact path='/' to='/home' />
                    {/*<Route exact path='/' component={Home} />*/}
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/playground' component={RestPlayground} />
                    <Route exact path='/state' component={StatePlayground} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/contact/:id' component={Contact} />
                    <Route component={NotFound} />
                </Switch>
            </div>

        </>
    );
};

export default App;