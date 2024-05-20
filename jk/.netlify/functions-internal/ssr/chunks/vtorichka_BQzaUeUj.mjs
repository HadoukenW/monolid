export { renderers } from '../renderers.mjs';

const page = () => import('./pages/vtorichka_pmjc_UHc.mjs').then(n => n.v);

export { page };
