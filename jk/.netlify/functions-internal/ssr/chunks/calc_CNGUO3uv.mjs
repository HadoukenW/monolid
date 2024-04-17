export { renderers } from '../renderers.mjs';

const page = () => import('./pages/calc_BSOOrrIv.mjs').then(n => n.c);

export { page };
