import React from 'react';
import logo from './logo.svg';
import Users from "./Components/Users/Users";
import Gallery from "./Components/Gallery/Gallery";
import Popup from "./Components/Gallery/Popup/Popup";
import Footer from "./Components/Footer/Footer";
import {AppHeader, AppLogo, Main, StyledApp} from "./StyledApp";

function App() {

    return (
        <StyledApp>
            <AppHeader className="App-header">
                <AppLogo src={logo} className="App-logo" alt="logo"/>
                <h1>Elfsight Test App</h1>
                <div>▼</div>
            </AppHeader>
            <Main>
                <Users/>
                <Gallery/>
            </Main>
            <Footer/>
            <Popup/>
        </StyledApp>
    );
}

export default App;