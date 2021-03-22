import {
	FC,
	useRef,
	ReactEventHandler,
} from 'react';

import throttle from '../../../lib/utils/throttle';
import styles from './Video.module.scss';

interface Props {
	video: string,
	audio: string
	className: string,
};

const Video: FC<Props> = ({ video, audio, className }) => {

	const audioRef = useRef<HTMLAudioElement>(null);
	const videoRef = useRef<HTMLVideoElement>(null);

	const handleDirectInteraction: ReactEventHandler<HTMLVideoElement | HTMLAudioElement> = throttle(e => {
		try {
			if (audioRef.current && videoRef.current) {
				audioRef.current.currentTime = e.currentTarget.currentTime;

				const partner = e.currentTarget === audioRef.current
					? videoRef.current
					: audioRef.current;

				if (e.currentTarget.paused) {
					partner.pause();
				} else {
					partner.play();
				}
			}
		} catch { }
	});

	return (
		<div className={ className }>
			<video
				className={ [className, styles.video].join(' ') }
				ref={ videoRef }
				onPlay={ handleDirectInteraction }
				onPause={ handleDirectInteraction }
				onSeeking={ handleDirectInteraction }
				src={ video }
				controls
				disablePictureInPicture
				controlsList="nodownload"
			/>

			<audio
				onPlay={ handleDirectInteraction }
				onPause={ handleDirectInteraction }
				onSeeking={ handleDirectInteraction }
				ref={ audioRef }
				src={ audio }
			/>
		</div>
	);
};

export default Video;