import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import Start from "./pages/Start";
import Result from "./pages/Result";

const App = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route path="/start" component={Start} />
            <Route path="/result" component={Result} />
        </BrowserRouter>
    );
};

export default App;
