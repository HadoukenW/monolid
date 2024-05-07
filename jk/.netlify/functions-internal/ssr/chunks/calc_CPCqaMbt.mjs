export { renderers } from '../renderers.mjs';

const page = () => import('./pages/calc_CRFYKit3.mjs').then(n => n.c);

export { page };
