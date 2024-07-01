export { renderers } from '../renderers.mjs';

const page = () => import('./pages/vtorichka_B82_rhEx.mjs').then(n => n.v);

export { page };
