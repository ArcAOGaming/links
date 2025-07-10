import { BazarLinks } from 'src/types';
import { getGateWay } from '../gateways';

export const BAZAR: BazarLinks=  {
    website: `https://bazar.${getGateWay()}`
};
