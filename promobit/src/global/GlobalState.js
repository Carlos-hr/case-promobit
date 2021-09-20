import React from "react";
import { BASE_URL } from "../constants/urls";
import useRequestData from "../hooks/useRequestData";
import GlobalStateContext from './GlobalStateContext'

const GlobalState = (props) => {
    const popMovies = useRequestData(`${BASE_URL}/popular`, [])
    const topRatedMovies = useRequestData(`${BASE_URL}/top_rated`, [])
    const data = {popMovies, topRatedMovies}

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState