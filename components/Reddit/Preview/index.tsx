import { FC, useState } from 'react';

import Video from '../Video';
import Gallery from '../Gallery';

import styles from './Preview.module.scss';

interface Props {
	urls: {
		url: string;
		hasAudio?: boolean;
	}[];
}

enum PreviewState {
	unloaded,
	shown,
	hidden,
}

const Preview = ({ urls }: Props) => {
	const [previewState, setPreviewState] = useState<PreviewState>(
		PreviewState.unloaded
	);

	const handleClick = () => {
		setPreviewState(
			previewState === PreviewState.unloaded ||
				previewState === PreviewState.hidden
				? PreviewState.shown
				: PreviewState.hidden
		);
	};

	return (
		<div className={styles.container}>
			<button onClick={handleClick} className={styles.button} />

			<Gallery shown={previewState === PreviewState.shown}>
				{urls.map(({ url, hasAudio }, i) => {
					const isVideo = /v\.redd\.it/.test(url);

					if (previewState === PreviewState.unloaded) {
						return null;
					}

					return isVideo ? (
						<Video
							isExpanded={previewState === PreviewState.shown}
							key={i}
							className={
								previewState === PreviewState.shown
									? styles.media
									: styles.hiddenMedia
							}
							videoSources={[480, 360, 240].map(
								(size) => `${url}/DASH_${size}.mp4`
							)}
							audio={hasAudio ? url + '/DASH_audio.mp4' : ''}
						/>
					) : (
						<img
							key={i}
							className={
								previewState === PreviewState.shown
									? styles.media
									: styles.hiddenMedia
							}
							src={url}
						/>
					);
				})}
			</Gallery>
		</div>
	);
};

export default Preview;
