import { FC } from 'react';

import Link from '../Link';

import { ListingItem } from '../interfaces';
import styles from './Links.module.scss';

interface Props {
	links: {
		data: ListingItem;
	}[];
}

const Links: FC<Props> = ({ links }) => {
	return (
		<ul className={styles.list}>
			{links.map(({ data }) => {
				return <Link key={data.id} data={data} />;
			})}
		</ul>
	);
};

export default Links;
