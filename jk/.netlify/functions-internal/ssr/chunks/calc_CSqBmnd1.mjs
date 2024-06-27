export { renderers } from '../renderers.mjs';

const page = () => import('./pages/calc_DEgAdx2r.mjs').then(n => n.c);

export { page };
