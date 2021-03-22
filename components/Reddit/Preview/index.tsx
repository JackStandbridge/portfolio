import { FC, useState } from 'react';

import Video from '../Video';

import styles from './Preview.module.scss';

interface Props {
	url: string,
};

enum PreviewState {
	unloaded,
	shown,
	hidden,
};


const Preview: FC<Props> = ({ url }) => {
	const [previewState, setPreviewState] = useState<PreviewState>(PreviewState.unloaded);

	const handleClick = () => {

		setPreviewState(
			previewState === PreviewState.unloaded || previewState === PreviewState.hidden ?
				PreviewState.shown :
				PreviewState.hidden
		);
	};

	const isVideo = /v\.redd\.it/.test(url);

	return (
		<div className={ styles.container }>
			<button onClick={ handleClick } className={ styles.button } />
			{ previewState !== PreviewState.unloaded &&
				isVideo ?
					<Video
						className={ previewState === PreviewState.shown ? styles.media : styles.hiddenMedia }
						video={ url + '/DASH_480.mp4' }
						audio={ url + '/DASH_audio.mp4' }
					/>
				:
				<img
					className={ previewState === PreviewState.shown ? styles.media : styles.hiddenMedia }
					src={ url }
				/>
			}
		</div>
	);
};

export default Preview;