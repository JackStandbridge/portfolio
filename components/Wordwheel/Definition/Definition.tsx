import { Fragment, FunctionComponent } from 'react';

import Loading from '../Loading/Loading';

import { DefinitionListing } from '../../../lib/slices/wordwheel/initial';
import styles from './Definition.module.scss';

interface Props {
	top: number
	left: number
	definitions: DefinitionListing[] | null
}

const Definition: FunctionComponent<Props> = ({
	definitions,
	top,
	left
}) => {
	return (
		<aside
			className={ styles.container }
			style={ { top, left } }
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
						<section className={ styles.contents } key={ i }>
							<h2 className={ styles.title }>
								{ word }&thinsp;

								<span className={ styles.pronunciation }>
									{ phonetics.map(entry => entry.text) }
								</span>
							</h2>

							<ul>
								{ Object.entries(meaning).map(([type, entries]) => (
									<li key={ type }>
										<h3>{ type }</h3>
										<>
											{ entries.map(entry => (
												<Fragment key={ entry.definition }>
													<hr />

													<p className={ styles.p }>
														{ entry.definition }
													</p>
												</Fragment>
											)) }
										</>
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