export const goToMovieDetails = (history, id) => {
	history.push(`/movie/${id}`);
};

export const goToMoviesPage = (history, category) => {
	history.push(`/movies/${category}`);
};

export const goToHome = (history) => {
	history.push(`/`);
};
