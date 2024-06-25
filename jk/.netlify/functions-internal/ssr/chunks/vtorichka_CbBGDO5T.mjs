export { renderers } from '../renderers.mjs';

const page = () => import('./pages/vtorichka_C480EIEX.mjs').then(n => n.v);

export { page };
