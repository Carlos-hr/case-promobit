import { useParams } from 'react-router';
import SearchMovie from '../../components/SearchMovie/SearchMovie';
import { SEARCH_URL } from '../../constants/urls';
import useRequestData from '../../hooks/useRequestData';
import MovieGrid from '../../components/MoviesGrid/MoviesGrid';
import Header from '../../components/Header/Header';
import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/alert';
import { Container } from '@chakra-ui/layout';

const SearchPage = () => {
	const params = useParams();
	const { movie, page } = params;

	const searchResult = useRequestData(`${SEARCH_URL}`, [], page, movie);
	const { results } = searchResult.data;
	const renderError = () => {
		if ( results !== undefined && results.length === 0) {
			return (
				<Container maxW="container.sm">
					<Alert status="error" justifyContent="center" borderRadius="10">
						<AlertIcon />
						<AlertTitle mr={2}>Filme não encontrado!</AlertTitle>
					</Alert>
				</Container>
			);
		}
	};
	return (
		<div>
			<Header />
			<SearchMovie />
			<MovieGrid results={results} />
			{renderError()}
		</div>
	);
};

export default SearchPage;
