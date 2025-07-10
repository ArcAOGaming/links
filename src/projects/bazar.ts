import { BazarLinks } from 'src/types';
import { getGateWay } from '../gateways';

export const BAZAR_Links: BazarLinks=  {
    website: `https://bazar.${getGateWay()}`
};
