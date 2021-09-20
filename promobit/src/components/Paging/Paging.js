import { Button } from '@chakra-ui/button';
import { Center, Flex } from '@chakra-ui/layout';
import { useHistory } from 'react-router';
import { goToMoviesPage } from '../../routes/coordinator';

const Paging = (props) => {
	const { category, page } = props;
	const history = useHistory();
	const numberPage = Number(page);

	const onClickNext = () => {
		goToMoviesPage(history, category, numberPage + 1);
	};
	const onClickBack = () => {
		goToMoviesPage(history, category, numberPage - 1);
	};

	const renderButton = () => {
		return numberPage > 1 ? (
			<Flex justify="space-between" w={[ '40%', '30%', '20%' ]}>
				<Button colorScheme="blue" variant="link" onClick={onClickBack}>
					Anterior
				</Button>
				<Button colorScheme="blue" variant="link" onClick={onClickNext}>
					Próxima
				</Button>
			</Flex>
		) : (
			<Button colorScheme="blue" variant="link" onClick={onClickNext}>
				Próxima
			</Button>
		);
	};
	return <Center mt={10} mb={10}>{renderButton()}</Center>;
};
export default Paging;
