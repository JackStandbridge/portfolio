import { FC } from 'react';
import Stave from './Stave';
import SemiBreve from './Notes/SemiBreve';
import Minim from './Notes/Minim';
import Crotchet from './Notes/Crotchet';
import Quaver from './Notes/Quaver';
import SemiQuaver from './Notes/SemiQuaver';

const Bar: FC = () => {
	return (
		<g transform='translate(0, 50)'>
			<Stave />
			<SemiBreve
				x={ 15 }
				y={ 10 }
			/>
			<Minim
				x={ 35 }
				y={ 20 }
			/>
			<Crotchet
				x={ 55 }
				y={ 30 }
			/>
			<Quaver
				x={ 75 }
				y={ 40 }
			/>
			<SemiQuaver
				x={ 95 }
				y={ 60 }
			/>
		</g>
	);
};

export default Bar;