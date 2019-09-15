import React, { createContext, useState } from "react";

export const NameContext = createContext();

const NameContextProvider = props => {
    const [playerName, setPlayerName] = useState("");

    return (
        <NameContext.Provider value={{ playerName, setPlayerName }}>
            {props.children}
        </NameContext.Provider>
    );
};

export default NameContextProvider;
