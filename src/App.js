import React, { } from 'react';
import { NavLink, BrowserRouter, Route, Switch } from 'react-router-dom';
import MicroFrontend from './MicroFrontend';
import { Provider } from 'react-redux';
import store from './store';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from './store/actions/app'

const funcs = require('./store/actions/app')

const { 
  REACT_APP_CREATEREACTAPP_HOST: createreactappHost,
  REACT_APP_CREATEREACTAPP2_HOST: createreactapp2Host
} = process.env;


const CreateReactApp = (props) => {
  return (
    <MicroFrontend
      history={props}
      host={createreactappHost}
      name="createreactapp"
      store={store}
      methods={funcs}
    />
  )
};


const CreateReactApp2 = (props) => (
  <MicroFrontend
    history={props}
    host={createreactapp2Host}
    name="createreactapp2"
  />
);

const Home = () => {

  return (<>
    <p>
      What is a micro front-ends approach? The term micro front-ends first came
      up in the ThoughtWorks Technology Radar in November 2016. It extends the
      concepts of microservices to front-end development.
    </p>
    <p>
      The approach is to split the browser-based code into micro front-ends by
      breaking down application features. By making smaller and feature-centered
      codebases, we achieve the software development goal of decoupling.
    </p>
    <p>
      Although the codebases are decoupled, the user experiences are coherent.
      In addition, each codebase can be implemented, upgraded, updated, and
      deployed independently.
    </p>
    <p>
      Here is the paradise of micro front-ends. JavaScript applications,
      regardless of frameworks and versions, are launched by a container. These
      applications, legacy and new, work together seamlessly, and act like one
      application.
    </p>
  </>)
};

const Header = () => {

  // Redux
	const app = useSelector(
    state => state.app
  );
  const dispatch = useDispatch();

  const toggleRedux = () => {
    dispatch(toggleDarkMode())
  }

  return (
    <>
      <h1>Main App Container</h1>
      <button onClick={toggleRedux}>CHANGE REDUX</button>
      <div>Dark mode staus: {app.dark_mode.toString()}</div>
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/createreactapp">
            Micro Frontend: Create React App
          </NavLink>
        </li>
        <li>
          <NavLink to="/createreactapp2">
            Micro Frontend: Create React App 2
          </NavLink>
        </li>
      </ul>
    </>
  )
}

const App = props => {
  return (
    <Provider store={store}>
      <BrowserRouter>      
        <Header/>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/createreactapp/:subpage?" render={(props) => <CreateReactApp {...props}/>} />
          <Route path="/createreactapp2" render={(props) => <CreateReactApp2 {...props}/>} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
