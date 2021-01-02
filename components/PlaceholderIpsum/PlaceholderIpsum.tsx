import { FC } from 'react';
import Head from 'next/head'

import styles from './PlaceholderIpsum.module.scss';

interface Props {
	handleSentences: (e: React.ChangeEvent<HTMLInputElement>) => void,
	handleParagraphs: (e: React.ChangeEvent<HTMLInputElement>) => void,
	numberOfSentences: number|'',
	numberOfParagraphs: number|'',
	output: string[][],
	handleCopy: () => void,
	buttonText: string,
}

const PlaceholderIpsum: FC<Props> = ({
	handleSentences,
	handleParagraphs,
	numberOfSentences,
	numberOfParagraphs,
	handleCopy,
	output,
	buttonText,
}) => {
	return (
		<div className='site-width'>
			<Head>
				<title>Placeholder Ipsum</title>
			</Head>

			<header className={ styles.header }>
				<h1>Placeholder Ipsum</h1>
				<p className={ styles.paragraph }>A simple Lorem Ipsum generator that explains that the content is just placeholder text.</p>
			</header>

			<main className={ styles.main }>
				<section className={ styles.inputs }>
					<label className={ styles.label }>
						Sentences per paragraph:
					<input
							className={ styles.input }
							type='number'
							value={ numberOfSentences }
							onChange={ handleSentences }
						/>
					</label>

					<label className={ styles.label }>
						How many paragraphs:
					<input
							className={ styles.input }
							type='number'
							value={ numberOfParagraphs }
							onChange={ handleParagraphs }
						/>
					</label>
				</section>

				<article>
					<header className={ styles.outputHeader }>
						<h2>Your Placeholder Ipsum:</h2>
						<button
							onClick={ handleCopy }
							className={ styles.button }
						>
							{ buttonText }
						</button>
					</header>

					<div className={ styles.ipsum }>
						{ output.map((paragraph, i) => (
							<p className={ styles.paragraph } key={ i }>
								{ paragraph.join(' ') }
							</p>
						)) }
					</div>
				</article>
			</main>
		</div>
	)
};

export default PlaceholderIpsum;