import React from "react";
import {StrictMode} from "react";
import './App.css';
import SearchParams from "./Components/SearchParams";

const App = () => {
    return(
        <StrictMode>
            <div>
                <h1>Adopt Me!</h1>
                <SearchParams />
            </div>
        </StrictMode>
    );
};
export default App;
