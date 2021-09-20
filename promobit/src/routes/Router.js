import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import MoviesPage from '../pages/MoviesPage/MoviesPage';
import DetailsPage from '../pages/DetailsPage/DetailsPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import SearchPage from '../pages/SearchPage/SearchPage';

export const Router = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<HomePage />
				</Route>

				<Route exact path="/movie/:id">
					<DetailsPage />
				</Route>

				<Route exact path="/movies/:category/:page">
					<MoviesPage />
				</Route>

				<Route exact path="/search/:movie/:page">
					<SearchPage />
				</Route>

				<Route>
					<ErrorPage />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
