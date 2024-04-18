export { renderers } from '../renderers.mjs';

const page = () => import('./pages/404_BDVAi-BL.mjs').then(n => n._);

export { page };
