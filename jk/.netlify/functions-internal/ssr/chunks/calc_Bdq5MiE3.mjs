export { renderers } from '../renderers.mjs';

const page = () => import('./pages/calc_BsngCOBi.mjs').then(n => n.c);

export { page };
