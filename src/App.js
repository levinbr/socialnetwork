import React, {Suspense} from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {HashRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./Components/common/Preloader/Preloader";
import store from "./Redux/redux-store";
import InDevelopment from "./Components/common/InDevelopment/InDevelopment";
const UserContainer = React.lazy(() => import('./Components/Users/UsersContainer'));

class App extends React.Component {

    catchAllUnhandledErrors = (reason, promise) => {
        //toDo: сделай компонент, который будет всплывать и показывать сбои в реквестах.
        alert('Request error. Pls handle this', reason)
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div className='wrapper'>
                <HeaderContainer />
                <Navbar />

                <div className='wrapper-content'>
                    <Suspense fallback={<Preloader />}>
                        <Switch>
                            <Route exact path='/' render={() => <Redirect from="/" to="/profile" />}/>
                            <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                            <Route path='/dialogs' render={() => <DialogsContainer />}/>
                            <Route path='/users' render={() => <UserContainer />}/>
                            <Route path='/login' render={() => <Login />}/>
                            <Route path='/development' render={() => <InDevelopment />}/>
                            <Route path='*' render={() => <div> 404 Not found </div>}/>
                        </ Switch >
                    </Suspense>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const AppContainer = compose (
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const MainApp = (props) => {
    return (
        //<HashRouter> используется из-за GitHub Pages. В другом случае поменяй на <BrowserRouter />
        <HashRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </HashRouter>
    )
}

export default MainApp;


