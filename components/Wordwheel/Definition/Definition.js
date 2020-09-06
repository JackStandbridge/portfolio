import { Fragment } from 'react';

import Loading from '../Loading/Loading';

import styles from './Definition.module.scss';

const Definition = ({ definitions, top, left }) => {
	return (
		<aside
			className={ styles.container }
			style={{ top, left }}
		>
			{ definitions === null && 'No definitions found!' }

			{ definitions === undefined &&
				<div className={ styles.loading }>
					<Loading colour='black' />
				</div>
			}

			{ definitions &&
				<article className={ styles.article }>
					{ definitions.map(({ word, meaning, phonetics }, i) => (
						<section key={ i }>
							<h2>
								{ word }&thinsp;
								<span className={ styles.pronunciation }>
									{ phonetics.map(entry => entry.text) }
								</span>
							</h2>
							<ul>
								{ Object.entries(meaning).map(([type, entries]) => (
									<li key={ type }>
										<hr />
										<h3>{ type }</h3>
										{ entries.map(entry => (
											<Fragment key={ entry.definition }>
												<p className={ styles.p }>
													{ entry.definition }
												</p>
												<hr />
											</Fragment>
										)) }
									</li>
								)) }
							</ul>
						</section>
					)) }
				</article>
			}
		</aside>
	);
};

export default Definition;