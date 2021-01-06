import { useEffect, useState } from 'react';

import Router from 'next/router';

const useScrollRestoration = () => {

	const [, setScrollPos] = useState<number[]>([]);

	useEffect(() => {
		// scroll position restoration necessary because
		// next doesn't restore scroll position on clicking
		// browser's back button.

		Router.events.on("routeChangeStart", target => {
			if (target !== '/') {
				setScrollPos(scrollPos => [...scrollPos, window.pageYOffset || 0]);
			}
		});

		Router.beforePopState(() => {
			setTimeout(() => {

				setScrollPos(scrollPos => {
					const newScrollPos = [...scrollPos];
					const y = newScrollPos.pop() as number;
					window.scrollTo(0, y);

					return newScrollPos;
				});
			}, 100)

			return true;
		});

	}, [setScrollPos]);
};

export default useScrollRestoration;