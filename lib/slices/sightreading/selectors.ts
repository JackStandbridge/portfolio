import { State } from '../../store';
import { Duration } from './types';

export const durationSelector = (state: State): Duration[] => state.sightreading.durations;