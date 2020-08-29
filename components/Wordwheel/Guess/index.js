import Guess from './Guess';

const GuessContainer = ({ word, guessedByUser, handleClick }) => (
	<Guess
		word={ word }
		guessedByUser={ guessedByUser }
		handleClick={ handleClick }
	/>
);


export default GuessContainer;