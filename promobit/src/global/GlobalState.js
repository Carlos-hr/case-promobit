import React from "react";
import { BASE_URL } from "../constants/urls";
import useRequestData from "../hooks/useRequestData";
import GlobalStateContext from './GlobalStateContext'


const GlobalState = (props) => {
    const popMovies = useRequestData(`${BASE_URL}/movie/popular`, [])

    const data = {popMovies}
    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState