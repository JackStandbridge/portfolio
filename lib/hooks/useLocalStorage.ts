import { useEffect, useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { rehydrateFromCache as rehydrateWW, setFirstVisit } from '../slices/wordwheel/reducer';
import { rehydrateFromCache as rehydrateCF } from '../slices/colourflood/reducer';
import { rehydrateFromCache as rehydrateSR } from '../slices/sightreading/reducer';
import initialWW from '../slices/wordwheel/initial';
import initialCF from '../slices/colourflood/initial';
import initialSR from '../slices/sightreading/initial';
import store from '../store';

// avoid using useLayoutEffect when rendering on the server.
const useIsomorphicLayoutEffect =
	typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const useLocalStorage = () => {
	const dispatch = useDispatch();

	useIsomorphicLayoutEffect(() => {
		const cache = localStorage.getItem('store');

		if (!cache) {
			dispatch(setFirstVisit(true));
		} else {
			const { wordwheel, colourflood, sightreading } = JSON.parse(cache || 'null') || {
				wordwheel: initialWW,
				colourflood: initialCF,
				sightreading: initialSR,
			};
			dispatch(rehydrateWW(wordwheel));
			dispatch(rehydrateCF(colourflood));
			dispatch(rehydrateSR(sightreading));
		}

		store.subscribe(() => {
			localStorage.setItem('store', JSON.stringify(store.getState()));
		});
	}, [dispatch]);

};

export default useLocalStorage;