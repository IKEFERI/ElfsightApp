import React, {useRef} from 'react';
import logo from './logo.svg';
import Users from "./Components/Users/Users";
import Gallery from "./Components/Gallery/Gallery";
import Popup from "./Components/Gallery/Popup/Popup";
import Footer from "./Components/Footer/Footer";
import {AppHeader, AppLogo, Main, StyledApp} from "./StyledApp";

function App() {
    const MainRef = useRef(null);
    const scrollFromMain = () => {
        MainRef.current.scrollIntoView({block: "start", behavior: "smooth"});
    }

    return (
        <StyledApp>
            <AppHeader>
                <AppLogo src={logo} alt="logo"/>
                <h1>Elfsight Test App</h1>
                <button onClick={scrollFromMain}>▼</button>
            </AppHeader>
            <Main ref={MainRef}>
                <Users/>
                <Gallery/>
            </Main>
            <Footer/>
            <Popup/>
        </StyledApp>
    );
}

export default App;