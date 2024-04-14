export { renderers } from '../renderers.mjs';

const page = () => import('./pages/calc_dmsCtxbs.mjs').then(n => n.c);

export { page };
