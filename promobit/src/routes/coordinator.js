export const goToMovieDetails = (history, id) => {
	history.push(`/movie/${id}`);
};

export const goToMoviesPage = (history, category, page) => {
	if (!page) {
		page = 1;
	}
	history.push(`/movies/${category}/${page}`);
};

export const goToHome = (history) => {
	history.push(`/`);
};

export const goToSearchPage = (history, movie, page) => {
	if (!page) {
		page = 1;
	}
	history.push(`/search/${movie}/${page}`);
};

