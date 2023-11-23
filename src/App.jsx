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

import {httpService} from "./http-service";

export const RestContext = React.createContext();

const App = (props) => {
    const fragments = ['posts', 'comments', 'albums', 'photos', 'todos', 'users'];
    const [statistics, setStatistics] = React.useState([]);

    const fetchData = () => {
        const promises = fragments.map(f => {
            console.log('request in component', f);
            return httpService.get(f)
                .then(r => {
                    console.log('response in component', r);
                    return {
                        marker: f,
                        count: r.data.length
                    }
                });
        });

        Promise.all(promises)
            .then(s => setStatistics(_ => s))
            .catch(e => console.log('Error', e));
    }


    return (
        <>
            <RestContext.Provider value={{
                statistics,
                fetchData
            }}>
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
            </RestContext.Provider>
        </>
    );
};

export default App;