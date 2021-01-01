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
    "revision": "8402c84f594cebd374ae77dc23c00d83"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.5fb5face.css",
    "revision": "40239ea5923ea53750172bc9362de681"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.dbddacc2.js",
    "revision": "c4f0581a95a13cee07ff818fc6f86b75"
  },
  {
    "url": "assets/js/10.86b93050.js",
    "revision": "05c3c457ea20b9e1c9667516b9a20db8"
  },
  {
    "url": "assets/js/11.9de4b775.js",
    "revision": "10318ab468ccb8164346cd1d89fd20bc"
  },
  {
    "url": "assets/js/12.33679f39.js",
    "revision": "7076ba6c2a4f011ee1083d9e5163c53d"
  },
  {
    "url": "assets/js/13.7edd7daa.js",
    "revision": "f0411b87717ed93e1c13d23c54caea34"
  },
  {
    "url": "assets/js/14.f3052c88.js",
    "revision": "a0f180f1ba6c941cbde90062ae6abe2a"
  },
  {
    "url": "assets/js/15.301c1865.js",
    "revision": "0c2244c6b5c51dd76aef78a97127e639"
  },
  {
    "url": "assets/js/16.7b056575.js",
    "revision": "e245e79c57dfd0612379d916592df7c7"
  },
  {
    "url": "assets/js/17.4dfee6ac.js",
    "revision": "eabcfe776b09feddda6c4d408d82a20b"
  },
  {
    "url": "assets/js/18.2f9c8ef5.js",
    "revision": "917567eef6c001bfada5d0722fc0e720"
  },
  {
    "url": "assets/js/19.d14161b1.js",
    "revision": "5622c6c9c57c230168eca6237166d8b3"
  },
  {
    "url": "assets/js/20.1f719eb8.js",
    "revision": "e2f58a22fa979f9277e0bfae38dcb135"
  },
  {
    "url": "assets/js/21.f30b2844.js",
    "revision": "754284d86f32401bf8da31167e3253df"
  },
  {
    "url": "assets/js/22.8bd9e8f4.js",
    "revision": "294e545e900ca3bff91a8e7b07b5838f"
  },
  {
    "url": "assets/js/23.cead1b05.js",
    "revision": "f10c303e2640e0db1849d7b7b8847d69"
  },
  {
    "url": "assets/js/24.d778fded.js",
    "revision": "3286fe114456de437016b4320b2d8534"
  },
  {
    "url": "assets/js/25.123ef496.js",
    "revision": "37d38f8ee318adf65fb8c347406d8a20"
  },
  {
    "url": "assets/js/26.bd69de98.js",
    "revision": "1aa9cd39a8831e4288c182e64854864b"
  },
  {
    "url": "assets/js/27.22d9c2b1.js",
    "revision": "1900c4724fde0c1e9586d6638d0de4f7"
  },
  {
    "url": "assets/js/28.3c10506e.js",
    "revision": "8a2eec8d9bec27202139a7c9f2f5aaea"
  },
  {
    "url": "assets/js/29.3f319f70.js",
    "revision": "91c807679a613763705862c78dd0ba35"
  },
  {
    "url": "assets/js/30.4a520ff7.js",
    "revision": "4fb6e1471fb03fa7b730614d03628c0a"
  },
  {
    "url": "assets/js/31.8a7eea84.js",
    "revision": "5f57a7c22ddc80889c12bdf96e8be12a"
  },
  {
    "url": "assets/js/32.90fdbfbc.js",
    "revision": "ce7a26a2a24fee4185b2b924bc4c795f"
  },
  {
    "url": "assets/js/33.4780db06.js",
    "revision": "6da8c4b24a1258a5b495829c9fca6315"
  },
  {
    "url": "assets/js/34.005403ba.js",
    "revision": "3fcbe4209ac8e6d44b592b6b2db9bb30"
  },
  {
    "url": "assets/js/35.6f9c2b87.js",
    "revision": "6720f883ea6cfdf6012aec616ef62604"
  },
  {
    "url": "assets/js/36.24a01fe5.js",
    "revision": "665d296f29e0c65041610cbb2194d8b6"
  },
  {
    "url": "assets/js/37.65d0ce98.js",
    "revision": "7f2ec7b2cbde6799215e71d264d0b1e3"
  },
  {
    "url": "assets/js/38.93af6927.js",
    "revision": "9eee5cf0924d6e2bd1a38ca3d3ad8081"
  },
  {
    "url": "assets/js/39.c3c387d2.js",
    "revision": "8060f0d2c0a1f50b506994a7ffb9e0cf"
  },
  {
    "url": "assets/js/40.821ca99f.js",
    "revision": "b48c36e29f67615d90ea3222341bf969"
  },
  {
    "url": "assets/js/5.f4d4a58e.js",
    "revision": "df880f5dc7d0461acac6cec0c0b180eb"
  },
  {
    "url": "assets/js/6.9147fe99.js",
    "revision": "ae65ed2aa10985d3681bc324e9eca142"
  },
  {
    "url": "assets/js/7.af81e1e2.js",
    "revision": "d21003c474373d0da9bd761b0ac101e1"
  },
  {
    "url": "assets/js/8.93f2288c.js",
    "revision": "81f422109588b54b3ecc74b5c68f1857"
  },
  {
    "url": "assets/js/9.cae1951a.js",
    "revision": "4ccf232be549dec574c946c66c67f55c"
  },
  {
    "url": "assets/js/app.63a33f78.js",
    "revision": "661b5d1c707e584ed22f2d19a9c78627"
  },
  {
    "url": "assets/js/vendors~flowchart.14e1fd36.js",
    "revision": "90e37e7e51605c31bb20708cbc006385"
  },
  {
    "url": "assets/js/vendors~notification.e56aef52.js",
    "revision": "9e846bd7b5032d60ad144fbc6ea1d072"
  },
  {
    "url": "batlote/index.html",
    "revision": "fffeb528969c0ba7c5ceebb3876caafc"
  },
  {
    "url": "batlote/tutorial/chap-01.html",
    "revision": "54d65bddf9187293e99f5f9e6aa3756a"
  },
  {
    "url": "batlote/tutorial/chap-02.html",
    "revision": "64cd1feb9b20be041ffdc9238a81a5eb"
  },
  {
    "url": "batlote/tutorial/chap-03.html",
    "revision": "eef00e5b733d640c1df64ed81c067a2c"
  },
  {
    "url": "batlote/tutorial/chap-04.html",
    "revision": "91ed32185c0f07506ea59e4f26f254e6"
  },
  {
    "url": "batlote/tutorial/chap-05.html",
    "revision": "925d52e3522b7c5c3f6e4e1b1a8c36a8"
  },
  {
    "url": "batlote/tutorial/chap-06.html",
    "revision": "7719e09028c1c933391fe4c7d42a70d8"
  },
  {
    "url": "batlote/tutorial/chap-07.html",
    "revision": "c23aefefe3a5663573b05ec244b2e03b"
  },
  {
    "url": "batlote/tutorial/chap-08.html",
    "revision": "39c198d33d3444be837d2e76ea080908"
  },
  {
    "url": "batlote/tutorial/chap-09.html",
    "revision": "a66fb8c1b75bbb863940538927fbc8fe"
  },
  {
    "url": "batlote/tutorial/chap-10.html",
    "revision": "062fc85d2a067b56b1225157bc1b1714"
  },
  {
    "url": "batlote/tutorial/chap-11.html",
    "revision": "350b20f564525e4ab418981edfdf3252"
  },
  {
    "url": "batlote/tutorial/chap-12.html",
    "revision": "d066320b6384c85cf450de3e2ca05b52"
  },
  {
    "url": "batlote/tutorial/chap-13.html",
    "revision": "1cb570be6d4ae8ed59e26e693e58191a"
  },
  {
    "url": "batlote/tutorial/chap-14.html",
    "revision": "d225dfb3a765aaa5177f2b79d694cab3"
  },
  {
    "url": "batlote/tutorial/chap-15.html",
    "revision": "7f1f689808cce2538ecf6536ab34eb58"
  },
  {
    "url": "batlote/tutorial/chap-16.html",
    "revision": "700ae09990c8400a0ccb3349b44cc74e"
  },
  {
    "url": "batlote/tutorial/chap-17.html",
    "revision": "8d258543743377ac660b2679791c5a5e"
  },
  {
    "url": "batlote/tutorial/chap-18.html",
    "revision": "86efc520200d3da6c8080abcaeaf4b49"
  },
  {
    "url": "batlote/tutorial/chap-19.html",
    "revision": "200fa452f4044ccb37cb7868f23a3b2f"
  },
  {
    "url": "batlote/tutorial/chap-20.html",
    "revision": "960390112ee6b987254036e394c66934"
  },
  {
    "url": "batlote/tutorial/chap-21.html",
    "revision": "3026fbef1c3ad978b8e4980a07e85b02"
  },
  {
    "url": "batlote/tutorial/chap-22.html",
    "revision": "cc056df0397e754aece7d539b3da5079"
  },
  {
    "url": "batlote/tutorial/chap-23.html",
    "revision": "9331b2883ab51c528bee2a38dacf4fc2"
  },
  {
    "url": "batlote/tutorial/chap-24.html",
    "revision": "c62a2638f669fc2d17ae4bd6d0a7f7fd"
  },
  {
    "url": "batlote/tutorial/chap-25.html",
    "revision": "67512fd0497d0ca3b1aa21301ed9475b"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "e5e3b3737b338f2608059968d2ef1704"
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
    "revision": "cf23526f451784ff137f161b8fe18d5a"
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
