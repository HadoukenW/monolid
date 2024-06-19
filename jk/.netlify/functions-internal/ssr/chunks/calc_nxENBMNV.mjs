export { renderers } from '../renderers.mjs';

const page = () => import('./pages/calc_Cu-H90tL.mjs').then(n => n.c);

export { page };
