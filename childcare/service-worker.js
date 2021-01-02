/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6737e63d408655a3d633ce5191ccceaf"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.918517b1.css",
    "revision": "7a5cc0eaae81ac26028ccaa17de56bae"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.a7a9fa24.js",
    "revision": "2654d158101695a6892ef786a2c3e4dc"
  },
  {
    "url": "assets/js/10.63efb848.js",
    "revision": "1768fb0e2c79a1095d7aa2ef9fdc0253"
  },
  {
    "url": "assets/js/11.4675fa16.js",
    "revision": "3bd196fcfa6129b2ab1b64eb14c7f83b"
  },
  {
    "url": "assets/js/12.fc29ed6f.js",
    "revision": "b7efa17c09200f0966888fac8b9ae2fc"
  },
  {
    "url": "assets/js/13.47c60071.js",
    "revision": "cf470125ce4203370b76009b0679aba5"
  },
  {
    "url": "assets/js/14.815b825f.js",
    "revision": "470ac0c9731af0b347a1f8010c8f1bc1"
  },
  {
    "url": "assets/js/15.edc189b0.js",
    "revision": "57254c99331e3248716ecb29533e6082"
  },
  {
    "url": "assets/js/16.35027255.js",
    "revision": "ca21b0bcd3f2f3e92273df3420a6cb7d"
  },
  {
    "url": "assets/js/17.5e7c5e62.js",
    "revision": "3ceab3ddd84533befc61beaace2dc192"
  },
  {
    "url": "assets/js/18.14c609d5.js",
    "revision": "6891e2b55728b3d2ad7cb407616dfe93"
  },
  {
    "url": "assets/js/19.e3cdef80.js",
    "revision": "83145da7332fe56879b6fe84fb28c115"
  },
  {
    "url": "assets/js/20.eba261f8.js",
    "revision": "961a51342b575caef058c69925adefba"
  },
  {
    "url": "assets/js/21.11e473ab.js",
    "revision": "35d3e60bec02f443fcebb34322c82345"
  },
  {
    "url": "assets/js/22.aecd894b.js",
    "revision": "634253d13163150b0320cb1af6429046"
  },
  {
    "url": "assets/js/23.cee6763d.js",
    "revision": "e48b759267388953ac630001d5198ca1"
  },
  {
    "url": "assets/js/24.9189406d.js",
    "revision": "a519880da5e9e734c977696d75eaad31"
  },
  {
    "url": "assets/js/25.69dff2e0.js",
    "revision": "685110018b6f855b388bffaa9a7af85c"
  },
  {
    "url": "assets/js/26.456c3973.js",
    "revision": "d4dc14a759336136f6a811bb8a1985cf"
  },
  {
    "url": "assets/js/27.35d2ce28.js",
    "revision": "2738d14cb8c545caec3f559992a9c9dc"
  },
  {
    "url": "assets/js/28.9f9b5391.js",
    "revision": "23f3d5b1ab020a612146f58936eba524"
  },
  {
    "url": "assets/js/29.5da61fc4.js",
    "revision": "45b4112b1daed715a14d39a634ea3090"
  },
  {
    "url": "assets/js/30.96e6ae06.js",
    "revision": "59a151bebceec6b7e72f5c8e3bf2d3c3"
  },
  {
    "url": "assets/js/31.93bd39ab.js",
    "revision": "0dcb8e0fb81d33f5cb4c2ca528e411c6"
  },
  {
    "url": "assets/js/32.33f71e0d.js",
    "revision": "ead5280b61bdf57840c7ebc5235ac222"
  },
  {
    "url": "assets/js/33.dae2230a.js",
    "revision": "c263fe765776703251c6655a29635216"
  },
  {
    "url": "assets/js/34.377f32d1.js",
    "revision": "c64c31e95b5918fa5a6b258a09d5dcef"
  },
  {
    "url": "assets/js/35.a1b615b2.js",
    "revision": "aff8c68fab928c2ff1c72ae691da797a"
  },
  {
    "url": "assets/js/36.9735c60d.js",
    "revision": "54b7c548526c7b8c04637c69735bc97c"
  },
  {
    "url": "assets/js/37.8bf83e69.js",
    "revision": "cb976f2adb8b66c8f8b99b06b3499813"
  },
  {
    "url": "assets/js/38.01513e84.js",
    "revision": "0d517fc946f069da5e8b53b0b53377da"
  },
  {
    "url": "assets/js/39.d83dcc77.js",
    "revision": "3cf65ac1f217e72736410c3ab43ef1c7"
  },
  {
    "url": "assets/js/40.f1dead35.js",
    "revision": "6abf884451b68cfbc169ecb7a7698299"
  },
  {
    "url": "assets/js/5.b424d43f.js",
    "revision": "904e1899df62c9b97a9fda77cd75c5ca"
  },
  {
    "url": "assets/js/6.57a26f76.js",
    "revision": "fefdef810547083c9c5fe9de5e6e7237"
  },
  {
    "url": "assets/js/7.d788dc9e.js",
    "revision": "719ffb3be9e12918fca408c674e2bacd"
  },
  {
    "url": "assets/js/8.afd6cde7.js",
    "revision": "d464a196b96ceb5c875fb9d4d60b4aef"
  },
  {
    "url": "assets/js/9.ecf2fc66.js",
    "revision": "70a701d4d1256b4db563edadff04131f"
  },
  {
    "url": "assets/js/app.64e4c0e6.js",
    "revision": "559a9e8ef02d750fd9da360b4f00919e"
  },
  {
    "url": "assets/js/vendors~flowchart.79646067.js",
    "revision": "d825011d729ac04b86eed68e0149d453"
  },
  {
    "url": "assets/js/vendors~notification.1fe07ba4.js",
    "revision": "b6b91bdb0914a8fb46f231e3c8c4f4c5"
  },
  {
    "url": "batlote/index.html",
    "revision": "19873e0dbabe1a0c2756c98467fa03a6"
  },
  {
    "url": "batlote/tutorial/chap-01.html",
    "revision": "01d825c044913f08bacadcf1ae7ca69c"
  },
  {
    "url": "batlote/tutorial/chap-02.html",
    "revision": "347965a25329447d4230ffb710bdf12d"
  },
  {
    "url": "batlote/tutorial/chap-03.html",
    "revision": "0418bea52b57efcfd89b7288be2af61f"
  },
  {
    "url": "batlote/tutorial/chap-04.html",
    "revision": "419e7c9991a947d8438b611c037ce2db"
  },
  {
    "url": "batlote/tutorial/chap-05.html",
    "revision": "580b5f42483b62db2f083a8d1e8a3847"
  },
  {
    "url": "batlote/tutorial/chap-06.html",
    "revision": "897e17bda7e5a0e4434b228a2ef4a6f0"
  },
  {
    "url": "batlote/tutorial/chap-07.html",
    "revision": "b0490ed8c313cf5a9a36ceeea1491e28"
  },
  {
    "url": "batlote/tutorial/chap-08.html",
    "revision": "567fa26945786ebe56ea8583922c0f20"
  },
  {
    "url": "batlote/tutorial/chap-09.html",
    "revision": "badf9a8e4d4212c9bad5fff26d24a465"
  },
  {
    "url": "batlote/tutorial/chap-10.html",
    "revision": "805247fb287931f47a38e11cab4675f4"
  },
  {
    "url": "batlote/tutorial/chap-11.html",
    "revision": "c8eddf4cc72d3901dbddb0e98c6135d9"
  },
  {
    "url": "batlote/tutorial/chap-12.html",
    "revision": "171ce842ac52b86f9fb76dcfa41f89a4"
  },
  {
    "url": "batlote/tutorial/chap-13.html",
    "revision": "1334726ee80bc989d4d435a9e1cb62e1"
  },
  {
    "url": "batlote/tutorial/chap-14.html",
    "revision": "c83f1f3c415665b8ed5c1ef994d0d70a"
  },
  {
    "url": "batlote/tutorial/chap-15.html",
    "revision": "634b7831a55c3bbeb278065917ae5f7a"
  },
  {
    "url": "batlote/tutorial/chap-16.html",
    "revision": "5ee033685ba7d6377fa177b62cd87d5e"
  },
  {
    "url": "batlote/tutorial/chap-17.html",
    "revision": "e46c20d225566c3498965521bd83a67f"
  },
  {
    "url": "batlote/tutorial/chap-18.html",
    "revision": "c3730654ddcd8d840ca41eb94ec54028"
  },
  {
    "url": "batlote/tutorial/chap-19.html",
    "revision": "1c87ba87f30646f37078abaec341535a"
  },
  {
    "url": "batlote/tutorial/chap-20.html",
    "revision": "e507c22d695582d8f0be2d4d1fd0dae2"
  },
  {
    "url": "batlote/tutorial/chap-21.html",
    "revision": "e966b304e154f067e1fe6d4c9884f213"
  },
  {
    "url": "batlote/tutorial/chap-22.html",
    "revision": "70fef5fe37cca9ccfcb10bf513b94885"
  },
  {
    "url": "batlote/tutorial/chap-23.html",
    "revision": "ecba64db8cd7e2552cf7b6000251efe8"
  },
  {
    "url": "batlote/tutorial/chap-24.html",
    "revision": "ab5b8e0083fdceaf90bb7031a07d54e9"
  },
  {
    "url": "batlote/tutorial/chap-25.html",
    "revision": "3ca859fc67b59c199ab414c9962ef72d"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "9a179cefe47da4d12f77b5fa7f40574a"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "b74b0a12ddf8583e1fe78122f891843c"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "9a6086548224effb03fd23a017db9442"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "7dcf11a40b1b0c99e392d9921b5ca713"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "9a179cefe47da4d12f77b5fa7f40574a"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a6086548224effb03fd23a017db9442"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "9a6086548224effb03fd23a017db9442"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "7dcf11a40b1b0c99e392d9921b5ca713"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4be3988c65da970d78a53f8f8552cca6"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "7dcf11a40b1b0c99e392d9921b5ca713"
  },
  {
    "url": "icons/logo-120.png",
    "revision": "9a6086548224effb03fd23a017db9442"
  },
  {
    "url": "icons/logo-144.png",
    "revision": "4be3988c65da970d78a53f8f8552cca6"
  },
  {
    "url": "icons/logo-152.png",
    "revision": "7dcf11a40b1b0c99e392d9921b5ca713"
  },
  {
    "url": "icons/logo-192.png",
    "revision": "9a179cefe47da4d12f77b5fa7f40574a"
  },
  {
    "url": "icons/logo-256.png",
    "revision": "855ae63a627fc234bd95c72870631722"
  },
  {
    "url": "icons/logo-384.png",
    "revision": "25329d7d1332311e314e1b3ccd3f869a"
  },
  {
    "url": "icons/logo-512.png",
    "revision": "b74b0a12ddf8583e1fe78122f891843c"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "4be3988c65da970d78a53f8f8552cca6"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "7dcf11a40b1b0c99e392d9921b5ca713"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "3878a972088eaf67ae8e9dd1f1ea1a1b"
  },
  {
    "url": "index.html",
    "revision": "bb96b0c6a39c677ce84bc064445ec345"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "9a6086548224effb03fd23a017db9442"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
