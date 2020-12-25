import React, { createContext, useContext, useReducer} 
from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children
}) => (
    <StateContext.Provider value={useReducer(reducer,
    initialState)}>
        {children}
    </StateContext.Provider>
);


//pull information form datalayer
export const useStateValue = () => useContext(StateContext);