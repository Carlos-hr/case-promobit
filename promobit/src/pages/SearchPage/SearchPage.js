import { useParams } from 'react-router';
import SearchMovie from '../../components/SearchMovie/SearchMovie';
import { SEARCH_URL } from '../../constants/urls';
import useRequestData from '../../hooks/useRequestData';
import MovieGrid from '../../components/MoviesGrid/MoviesGrid';
import Header from '../../components/Header/Header';


const SearchPage = () => {
	const params = useParams();
	const { movie, page } = params;

	const searchResult = useRequestData(`${SEARCH_URL}`, [], page, movie);
	const { results } = searchResult.data;

	return (
		<div>
			<Header />
			<SearchMovie />
			<MovieGrid results={results} />
		</div>
	);
};

export default SearchPage;
