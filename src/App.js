import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import Register from './pages/auth/Register';
import Login from './pages/auth/LogIn';
import Forgot from './pages/auth/Forgot';
import Reset from './pages/auth/Reset';
import Index from './pages/index';

import FriendInfo from './pages/Sender/FriendInfo';
import HowWorks from './pages/Sender/HowWorks'
import QrCode from './pages/Receiver.js/QrScreen'


import PrivateRoute from './components/routing/PrivateRoute';
import theme from './theme';
// import history from './store';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import { PersistGate } from 'redux-persist/integration/react';
// import { store, persistor } from './store';
import { Provider } from 'react-redux';
import {persistor,store} from './store'

function App() {
	return (
		<div className='App'>
      <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
        <PersistGate persistor={persistor} />
          <Switch>

            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/register' component={Register}></Route>
            <Route exact path='/forgot' component={Forgot}></Route>
            <Route exact path='/reset' component={Reset}></Route>

            <Route exact path='/friendInfo' component={FriendInfo}></Route>
            <Route exact path='/howWorks' component={HowWorks}></Route>
            <Route exact path='/qrCode' component={QrCode}></Route>
            <Route exact path='/' component={Index}></Route>

          </Switch>
        </Router>
        </ThemeProvider>
      </Provider>
      <ToastContainer autoClose={2000} />
		</div>
	);
}

export default App;