import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";

export const Router = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <HomePage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router