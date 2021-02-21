const swtimestamp = '20191007 13:44';
const SW_FILES_TO_CACHE = [
  // GENÉRICAS
  '/css/apu.css',
  '/css/w3.css',

  '/fcg/fcg.js',
  '/apulib/apulib.js',

  '/img/apu.ico',
  '/img/ms-symbollockup_signin_dark.png',
  '/img/ms-symbollockup_signin_light.png',
  '/img/btn_google_signin_dark_normal_web.png',
  '/img/btn_google_signin_light_normal_web.png',

  '/js/apisgoogleplatform.js',
  '/js/msal.js',

  // ESPECÍFICAS DE LA APLICACIÓN
  '/',  // módulos de app html, css y js****23234234
  '/manifest.json',
  
  '/app.css',
  '/app.html',
  '/app.js',       
  
  '/fca/fca.js',

  '/appimg/icons/icon-72x72.png', // iconos
  '/appimg/icons/icon-96x96.png',
  '/appimg/icons/icon-144x144.png',
  '/appimg/icons/icon-152x152.png',
  '/appimg/icons/icon-192x192.png',
  '/appimg/icons/icon-384x384.png',
  '/appimg/icons/icon-512x512.png',
  '/appimg/fotofondo.jpg', // background 
  '/appimg/apudemo.jpg', // un recurso de imagen demo
  // ¿fonts?
];

self.addEventListener('install', async event => {
  const cache = await caches.open('static-cache');
  cache.addAll(SW_FILES_TO_CACHE);
});

async function cacheFirst(req){
  const cachedResponse = caches.match(req);
  return cachedResponse || fetch(req);
}

async function networkFirst(req){
  const cache = await caches.open('dynamic-cache');
  try {
      const res = await fetch(req);
      // PARA QUE NO CACHEE POSTS (API), SOLO LOS GET
      if (res.method=='GET') cache.put(req, res.clone()); 
      return res;
  } catch (error) {
      return await cache.match(req);
  }
}

self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);
  if(url.origin === location.url){
      event.respondWith(cacheFirst(req));
  } else {
      event.respondWith(networkFirst(req));
  }
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});
