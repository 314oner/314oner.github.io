import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

export default function swCustom(params) {
  if (params.debug) {
    console.log('[Docusaurus-PWA][SW]: running swCustom code', params);
  }
  registerRoute(
    (context) =>
      [
        /graph\.314oner\.com\/.*\/picture/,
        /netlify\.com\/img/,
        /avatars1\.githubusercontent/,
      ].some((regex) => context.url.href.match(regex)),
    new StaleWhileRevalidate(),
  );
}
