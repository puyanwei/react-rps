import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import Start from "./pages/Start";

const App = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route path="/start" component={Start} />
        </BrowserRouter>
    );
};

export default App;
