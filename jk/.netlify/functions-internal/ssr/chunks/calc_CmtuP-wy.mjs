export { renderers } from '../renderers.mjs';

const page = () => import('./pages/calc_BotHI643.mjs').then(n => n.c);

export { page };
