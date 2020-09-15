import React, {Suspense} from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, HashRouter, Route, withRouter} from 'react-router-dom';
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./Components/common/Preloader/Preloader";
import store from "./Redux/redux-store";
const UserContainer = React.lazy(() => import('./Components/Users/UsersContainer'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div className='wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='wrapper-content'>
                    <Suspense fallback={<Preloader />}>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/users' render={() => <UserContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
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
        //todo:  Поменять на <BrowserRouter /> когда изменится хостинг
        <HashRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </HashRouter>
    )
}

export default MainApp;


