import {
	FC,
	useRef,
	useEffect,
	ReactEventHandler,
} from 'react';

import throttle from '../../../lib/utils/throttle';
import styles from './Video.module.scss';

interface Props {
	video: string,
	audio?: string,
	className: string,
	isExpanded?: boolean,
};

const Video: FC<Props> = ({ video, audio, className, isExpanded }) => {

	const audioRef = useRef<HTMLAudioElement>(null);
	const videoRef = useRef<HTMLVideoElement>(null);

	const stopMedia = () => {
		if (videoRef.current) {
			videoRef.current.currentTime = 0;
			videoRef.current.pause();
		}

		if (audioRef.current) {
			audioRef.current.currentTime = 0;
			audioRef.current.pause();
		}
	}

	const handleMedia: ReactEventHandler<HTMLVideoElement | HTMLAudioElement> = throttle(e => {
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

		if (!isExpanded) {
			stopMedia();
		}

	});

	useEffect(() => {
		stopMedia();
	}, [isExpanded])

	return (
		<div className={ className }>
			<video
				className={ [className, styles.video].join(' ') }
				ref={ videoRef }
				onPlay={ handleMedia }
				onPause={ handleMedia }
				onSeeking={ handleMedia }
				src={ video }
				controls
				disablePictureInPicture
				controlsList="nodownload"
			/>

			{ audio &&
				<audio
					onPlay={ handleMedia }
					onPause={ handleMedia }
					onSeeking={ handleMedia }
					ref={ audioRef }
					src={ audio }
				/>
			}
		</div>
	);
};

export default Video;