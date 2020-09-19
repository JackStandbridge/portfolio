import { State as ColourfloodInitial } from './colourflood/initial';
import { State as WordwheelInitial } from './wordwheel/initial';

export interface State {
	wordwheel: WordwheelInitial;
	colourflood: ColourfloodInitial;
}

export { default as wordwheel } from './wordwheel/reducer';
export { default as colourflood } from './colourflood/reducer';