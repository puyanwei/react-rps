import React from "react";
import { HashRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import Start from "./pages/Start";
import Result from "./pages/Result";
import NameContextProvider from "./contexts/NameContext";

const App = () => {
    return (
        <HashRouter>
            <NameContextProvider>
                <Route exact path="/" component={Home} />
                <Route path="/start" component={Start} />
                <Route path="/result" component={Result} />
            </NameContextProvider>
        </HashRouter>
    );
};

export default App;
