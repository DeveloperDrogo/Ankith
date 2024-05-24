'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "12a92ef79835b40a6093bcc932b54998",
"index.html": "2747a3b12ae7657974a85011742345ab",
"/": "2747a3b12ae7657974a85011742345ab",
"main.dart.js": "4841b2aea4f4798627860db21b5ddd8c",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "fe3efdabbab826762c914b1b0811f44f",
"assets/AssetManifest.json": "719c3e3d2fb126dd47638a232542c2e9",
"assets/NOTICES": "a6fbbbe1f0aaabdd6f123fac60bb5de9",
"assets/FontManifest.json": "240e364e3e4a429749a384e6acdab964",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/iconly/fonts/IconlyBold.ttf": "128714c5bf5b14842f735ecf709ca0d1",
"assets/packages/iconly/fonts/IconlyLight.ttf": "5f376412227e6f8450fe79aec1c2a800",
"assets/packages/iconly/fonts/IconlyBroken.ttf": "6fbd555150d4f77e91c345e125c4ecb6",
"assets/packages/remixicon/fonts/Remix.ttf": "83628e3d1253bfac699c4ef96121bd72",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "4da20b7e8847e15ee023aa87168e0fca",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/work.png": "b11b3df93954aa58a41c92ebba14aaea",
"assets/assets/images/edu.png": "d8dc3156c3f5d4eda25aaa02490de6c9",
"assets/assets/images/experience.png": "d28d83dc85b72d07428b96dec9bb0953",
"assets/assets/images/school.png": "354f1fc5ae13d7dd3513709a01d1635f",
"assets/assets/images/flutter.png": "a5c27d36950d483f1ed590e8d45b71d9",
"assets/assets/images/uiux.png": "42626784c8bc2a0110bf831498f047e4",
"assets/assets/images/ex.png": "61d84b38962f114144e786ab1adbf649",
"assets/assets/images/eng.png": "1eb9098e9080ad74e41655abcba0e28c",
"assets/assets/images/mine.jpeg": "068d76909d7bd796a259bb9cce59b4d4",
"assets/assets/images/accolade.jpeg": "95491555f9fa91bfb974019ab631b176",
"assets/assets/images/pu.png": "087e24573d3c29b767346cc4170f5b5b",
"assets/assets/images/profile.jpeg": "1a7e13ba8ed73019901d6c2e1147cde7",
"assets/assets/images/parrophins.jpeg": "9b13a85711315cc0ffe7b0485499ccd7",
"assets/assets/images/gateway.jpg": "577fce7630737cff7e775bbc21725e59",
"assets/assets/images/engineer.png": "6235e201cdb142044c3ed1fd68f89970",
"assets/assets/images/high.png": "ae9f8a297860e2a21d415659f7532ebd",
"assets/assets/projects/karmik/karmik9.png": "7d4d6d004224c9b9ac86751974b20b8d",
"assets/assets/projects/karmik/karmik8.png": "1cc291765a4f5df2236c7174db03b88d",
"assets/assets/projects/karmik/karmik11.png": "57a6a9bfb26fac7eaffce012ce29d9b2",
"assets/assets/projects/karmik/karmik5.png": "5cda40134c698a26dc1c29c345c340ab",
"assets/assets/projects/karmik/karmik4.png": "b80c5d6ead71e872d665e26ed25cfa0a",
"assets/assets/projects/karmik/karmik10.png": "8cf70d33e81bdc46f00449d084224b54",
"assets/assets/projects/karmik/karmik12.png": "eb507f48d3221b7abb5d3920d6c9323c",
"assets/assets/projects/karmik/karmik6.png": "d99e0ed0811d19f0beaa3b4b788fc8b6",
"assets/assets/projects/karmik/karmik7.png": "d4151216050ac809f70cbc7cd69c866b",
"assets/assets/projects/karmik/karmik13.png": "b4442fd04af7a7184753a8c8a8bffefb",
"assets/assets/projects/karmik/karmik3.png": "efd7a85a1bf48b57717ea38349c34bad",
"assets/assets/projects/karmik/karmik2.png": "c0aa73359f9b817a9ec1a35577fb0022",
"assets/assets/projects/karmik/karmik1.png": "904691de21edfb8bde3e6c38a6188e35",
"assets/assets/projects/justconnect/just4.jpeg": "3c280645299762c13d76405ed78ac118",
"assets/assets/projects/justconnect/just5.jpeg": "14d1b2cb4b23663ee8c2d1cdc9e24a63",
"assets/assets/projects/justconnect/just2.jpeg": "fd80eab523c9f11e7b7f287d7d17efb4",
"assets/assets/projects/justconnect/just3.jpeg": "a7de2d60f8200d21bbce4dd31333d9c2",
"assets/assets/projects/justconnect/just0.jpeg": "62fbb51ef1d37b5d5b26cacea4d4944c",
"assets/assets/projects/justconnect/just1.jpeg": "59060dff48e108c7f7b7f20d3fde1681",
"assets/assets/projects/mpl/mpl1.jpeg": "08496e8c04c3ae82ae635aedeeea2b61",
"assets/assets/projects/mpl/mpl5.jpeg": "ecd2630611db4856c2271f5fbefe3d30",
"assets/assets/projects/mpl/mpl4.jpeg": "8e1626b54c5ea78e9663833572d12dd6",
"assets/assets/projects/mpl/mpl3.jpeg": "7b9f57d83088451349688ecb8ade17f4",
"assets/assets/projects/mpl/mpl2.jpeg": "1f10716453360da810e901d856aec9f6",
"assets/assets/projects/aikyam/aikyam6.jpeg": "5f981ab70a69a9ff217e001af18dc520",
"assets/assets/projects/aikyam/aikyam7.jpeg": "ab62a1bd3305efe89a47852860c2d405",
"assets/assets/projects/aikyam/aikyam11.jpeg": "61648679f37d0b6a513fe4cb27053fd2",
"assets/assets/projects/aikyam/aikyam10.jpeg": "fa35067d4ba860df8d65d631eb458b4e",
"assets/assets/projects/aikyam/aikyam1.jpeg": "e6e568175845b8ea788b48c879723e99",
"assets/assets/projects/aikyam/aikyam2.jpeg": "0a26b9cd45a9bf29bb61790f2e922960",
"assets/assets/projects/aikyam/aikyam3.jpeg": "5fba5b1f33d934144df7279441d3dfb9",
"assets/assets/projects/aikyam/aikyam8.jpeg": "adcff137e9f3d612bdc295a457f54dce",
"assets/assets/projects/aikyam/aikyam4.jpeg": "aa1313bbcc7b7825d1eff878b9c53889",
"assets/assets/projects/aikyam/aikyam5.jpeg": "8b53dc423a8ff204bddd640e79fd313d",
"assets/assets/projects/aikyam/aikyam9.jpeg": "223f7574796ab18c9f65bd1c4d0a223c",
"assets/assets/uiux/parropass/parropass3.jpg": "33ec644f20d08bcd94757f85aea366ce",
"assets/assets/uiux/parropass/parropass2.jpg": "ce13106cff48a6a9b6d0a0e20a74f16e",
"assets/assets/uiux/parropass/parropass1.jpg": "c1626fa1cd373b55a6b2693f728e77a8",
"assets/assets/uiux/parropass/parropass5.jpg": "bcf4f0f038bf783676ad14d269e83459",
"assets/assets/uiux/parropass/parropass4.jpg": "aa5b1fb8da6f2be2f863f807157700aa",
"assets/assets/uiux/parropass/parropass6.jpg": "518b9c94761f2e72e687b103214d4235",
"assets/assets/uiux/parropass/parropass7.jpg": "bca0872a00ee6d945e7dea00486ab758",
"assets/assets/uiux/parropass/parropass9.jpg": "7e4c3c6b91fd0274089062a4e8671579",
"assets/assets/uiux/parropass/parropass8.jpg": "594c569c3636e3c8140eb439d2f80bce",
"assets/assets/uiux/logos/airnb.png": "0b17643606d276860ea48b74189623f1",
"assets/assets/uiux/mpl/mpl1.png": "677e2334a0020deae9f9ca727b014602",
"assets/assets/uiux/mpl/mpl3.png": "2c9845212e535e776c2827c0d8e8059b",
"assets/assets/uiux/mpl/mpl2.png": "1b7e9ab37ca07dbefc50ce83ec47d22f",
"assets/assets/uiux/mpl/mpl4.png": "9eca16430c695ca047aa0d6d337c153a",
"assets/assets/uiux/kambala/kambala4.jpg": "bdd5917e4c617dc3d964694663fde6b4",
"assets/assets/uiux/kambala/kambala1.jpg": "cac0b3ff076a6cf49661f730bc7160c9",
"assets/assets/uiux/kambala/kambala2.jpg": "a304c2538e657faee40c9744e13dba75",
"assets/assets/uiux/kambala/kambala3.jpg": "d650496f2be8321508405f1fe0db3e46",
"assets/assets/uiux/alumean/alumean9.jpg": "e3629f0f66b15d305b37cd3ddb95817f",
"assets/assets/uiux/alumean/alumean8.jpg": "07e6c6f18fe1a0f1c07a28f00d13b941",
"assets/assets/uiux/alumean/alumean3.jpg": "c13309a472fb89fc44ebef850e1ee9f2",
"assets/assets/uiux/alumean/alumean2.jpg": "a5b1343795190981c80d2f497db4a02d",
"assets/assets/uiux/alumean/alumean1.jpg": "ef22395a1078ca2734a7d24302f50dc3",
"assets/assets/uiux/alumean/alumean5.jpg": "c23f38cfe0cf623506503684021db317",
"assets/assets/uiux/alumean/alumean4.jpg": "fdf5343b46d4920a74f6cd75dc71c6ec",
"assets/assets/uiux/alumean/alumean6.jpg": "55cd3ffdc7116811a66c05da488c2933",
"assets/assets/uiux/alumean/alumean7.jpg": "29531c7573dc2c765a05606a42c68b08",
"assets/assets/uiux/aikyam/aikyam2.jpg": "b8c4219509ad91e6dd2daebf1bc9a188",
"assets/assets/uiux/aikyam/aikyam3.jpg": "a838a7f64655acdf0f203d922d0636c4",
"assets/assets/uiux/aikyam/aikyam1.jpg": "97b6b9c86afad2ab04c948b071f82a8e",
"assets/assets/uiux/aikyam/aikyam4.jpg": "44776e850bada0a81edee08a027c3951",
"assets/assets/uiux/aikyam/aikyam5.jpg": "a419c3a975cb213c72eccf011922f538",
"assets/assets/uiux/aikyam/aikyam7.jpg": "f687994ae0aca12c75c407db8f744f0f",
"assets/assets/uiux/aikyam/aikyam6.jpg": "2cf529271e91911692230aea8994971c",
"assets/assets/icons/bootstrap.svg": "f5212e99302f9fd65486010ed66aa8c5",
"assets/assets/icons/figma.svg": "b3325a61e6b19911f1b26062a046e6b1",
"assets/assets/icons/mongo.svg": "5929aeee3ce5495b9475613e2fae694f",
"assets/assets/icons/googleconsole.svg": "de25ec18c15aeb4ad30f0c43a7c714ba",
"assets/assets/icons/firebase.svg": "ab7d48c559d630e419778d14e228988b",
"assets/assets/icons/github.svg": "b8aeb451034beeaf0148cfbd7d9d8226",
"assets/assets/icons/flutter.svg": "9df4f9d9c9a790e3d95e72f1584e2187",
"assets/assets/icons/css.svg": "79afcf47cfc886718c2b3b465c1ae544",
"assets/assets/icons/app-store.svg": "85747858236d63b82c67dbef19b88c57",
"assets/assets/icons/codeigniter.svg": "510c5b6ee440ec6c9010d20d00772333",
"assets/assets/icons/linkedin.svg": "681c4fa9689d5e3c0a36270793d71244",
"assets/assets/icons/insta.svg": "97bbc4283f38a1eb007226e05da1d86b",
"assets/assets/icons/html.svg": "056ddefdc381a90dd2f1e15bd2421750",
"assets/assets/icons/phpmyadmin.svg": "85e80d916f2b84c720160993a68e9910",
"assets/assets/icons/node.svg": "805c64b7e3dcac55f50a38d7d13c6621",
"assets/assets/lottie/bg.json": "9a56d32c734ee98d36774c1f2b08e4d9",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
