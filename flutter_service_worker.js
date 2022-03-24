'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "67839e1bba5029447aa47d2e4b280b37",
".git/config": "840514e0d169ad52e501c4b917c50b35",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "7a2c523cf1e0fa0a2d55e0d8c6f6090b",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "044cd3cd76eb5c4953e67c34b9fed180",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c954a5fab6b4519a049bdb90c85f828a",
".git/logs/refs/heads/master": "c61a1c694764fd1e7f7151a218aba573",
".git/logs/refs/remotes/origin/master": "e88e5d0d1348839c6e978eb3a85dcacb",
".git/objects/01/8729472fdb1603f5a806f430e3a260556b3312": "3ca0cae64d143e09ae3bb31b6169cbf5",
".git/objects/09/92bcb78ef7c84f7651d28214682a9f67419647": "3d47af16e144fa033494da67a229f57a",
".git/objects/0e/6c79c1351fcb1d475c391f44f547129d907921": "06d2a888cf7fa28ecdbd567451c1050e",
".git/objects/10/99a611139c80ed33e0f1604f93061c51d11834": "5e7f261bbdb6b9ad7ac6cfc4592810cb",
".git/objects/12/a51947019857340b1dbda86a6992bc77cfa818": "8a0c44a0ec3af9cf63d2203add0900c5",
".git/objects/1b/1de0f05eb8d4b1215952362a0da4f4428a1af3": "5f600df401d8aa64f08758defb3c6ed0",
".git/objects/23/ee597d12b9bbc78d51500ffca047321448b801": "4859736ecb0e8d9c4beed4f698b8bd90",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/2d/3eb8985c53a99553c9e566ee79436e6fc69b85": "3ed9c4a4bd3d30561cf8d4371484360d",
".git/objects/2d/ffd8a41dfd366d4801c10cc18e8af053601ff4": "11600163150c2dbc62172d456a70e4f7",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/ff20dd7f299d76d44ec6a4756809d1a217c5ce": "62369bc2327f6abbe1d02ae0095c2658",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/3b/a2f0798e6b699dea1d785a71ee017e7315801c": "f5acb58d085c5d3a7c7a139693f5c791",
".git/objects/3d/317ac8c0f8c707d9148d3460a7748860c30644": "e1e8a2f4689feb2bee1abc1bee1517ed",
".git/objects/45/494a36017574e22552c34a10715676ff7e2659": "ebc7a4015946cbfa77e4f200e209cad9",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/e0758ae0af10d8ef0e4fdbc231669c76647617": "3e11dc81cdfa174db7286765274167a0",
".git/objects/4d/d60f322233f3cb4828e504f75ac64799a5d957": "38574da710901b8d5f6233d19c24e344",
".git/objects/68/8d3183074a2bd9c834deee4d268d65473ba266": "67feef85923eeee267f5c3a1802d913a",
".git/objects/70/15c440fcaaef3eb6426ff473dacec9b2d69d27": "60b970fab874b91aae2aa8c0ae2aec2c",
".git/objects/70/4a41e7dabf864f8668c522571f8d5ecc09ab00": "68d11e9ed411f2e7106823b26712f422",
".git/objects/70/eef82e5c07dfc85dbe8222195017601dee382c": "947e2d42a724a00f862fcadf07b6d0ba",
".git/objects/72/714f3f36b238c054f876ae7fe00207070c4062": "eedf5d5f29c1203f8445c09c56cabb65",
".git/objects/77/8eb93f16700e8eb27a005f5c18382625b9e089": "af2e5216bf4d62f9fa0e236f777c86e7",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/81e89dc7604759b816ce017d1d2fd7b79d4b28": "0ccd15aa9131a9d28ac02688f5cb0ed5",
".git/objects/80/9aa8cc73d0a0f4a175d17110a5be2512f7e6bf": "6e326f6893215dbf75a706a384da1635",
".git/objects/83/5276c846e5c7cb128025580667fa643d3aea23": "9d8b6e6a8f18ed0f2a171f85bcaa5a6e",
".git/objects/86/6669e933b3e3a256e55d6d2b1a403d1711739d": "135a4ad582dff645cb09f6285f382465",
".git/objects/86/68697de418960273e693b8be174fbd266869ae": "8521b57ceee331668206dc8035ae12f0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/4c31a3b1a01bdaff0d9f8498371610bb3dadcb": "dc3be361767c866bd4ed2c51e2d0bdc2",
".git/objects/8e/6bb8d5040a99b29f7d5fe567a707fc02f765a9": "b226420a5c836094da3fe4e9db05d8b3",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/94/a25f7f4cb416c083d265558da75d457237d671": "f4ba8c706b5e4a214d83e95a0099370a",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/a0/70296a9cd303ded8d048f02a3b98f738a47cb1": "659a541c8b5538bd2ca3cec6fb887605",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/54f71f974aa6c79f816b324ae964e3581ccaf0": "6ebc6cb932851250346b850610f172d1",
".git/objects/a7/1ede33acf66eb68f700b14f979280221230f4c": "07ec36fdd69001b31adcd60c83877d5a",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/04747a5b56ba57734f838f39225eb890f68cb8": "40502def6d1e10384cec1cb6fd5e6794",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/8ccee9fc4e15fa0264c235a4ba0616e24a366f": "6f6e4ce2fa2ec842dc83aa902c612b1a",
".git/objects/c6/c9ea44b3b16650b9f9b0e485a50c3d46615614": "dcd0aee1a27d4f43e39ae8c2d4d69d03",
".git/objects/c7/cb13013837d2073a77986f69ec5b5db63b9d10": "8dc86a26590f25fc6e5c32f2f1cf0c4d",
".git/objects/cb/a94237d847b0e986fc2e4ce7e5886eee1a83b2": "ce56ae85ec84204762745b453aa0dd4f",
".git/objects/d0/ed6bc57f5ed37a96350d1bc00d809a6250607e": "8c335f7bd15aac0565c5a0c902d59529",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/da/6092f3d2771bfc81a43708f3072eb2ada1031a": "47932d63dfa61de7875e52cb6f0f3eeb",
".git/objects/e0/c20967994f4d657dc62c556979f96a7ec7555f": "587b7322d1756d6c7156ba262e121bc4",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/5d62a54308bb73e33377f5b8d983ca7004d3ae": "0a0a8f0e067fe329e160d1e282d91482",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/58fdc18216d2175637ec6c6c08946d844671d0": "bd6ebc367c235f0b31a1421f363f1ea2",
".git/objects/f2/4e0f0a4c223e77365d1ee750e3770e98f97aa2": "ae39bde32275a8f472821574c332c3a4",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/f5/ae963a04ff5653518c07794239a9ba0c54c073": "def7357d6a83e1191269fd6976bca65b",
".git/objects/fd/0615832ee02af339562a9c74d92c000866edb3": "ccd9d51280104c6dfd0a49f0f1bfa2c3",
".git/ORIG_HEAD": "8435fa34990a37cb714fc3af027431ec",
".git/REBASE_HEAD": "25cceec430336e1f46751003d68ae0ea",
".git/refs/heads/master": "50dea7681bcd037203003e71b19b7442",
".git/refs/remotes/origin/master": "50dea7681bcd037203003e71b19b7442",
".idea/misc.xml": "0245a2d3a2dbdd7efa2c7c08f30221eb",
".idea/modules.xml": "9e76b956e97dbf7d14a4b3d83c8c2375",
".idea/shelf/Uncommitted_changes_before_rebase_%5BDefault_Changelist%5D/shelved.patch": "76d24e18b0068deb54ef7897f746213d",
".idea/shelf/Uncommitted_changes_before_rebase_%5BDefault_Changelist%5D1/shelved.patch": "52ebbf606c72f433fe90a74b3eea5a81",
".idea/shelf/Uncommitted_changes_before_rebase__Default_Changelist_.xml": "5b0e7914d073a032bb1a245660b953c1",
".idea/shelf/Uncommitted_changes_before_rebase__Default_Changelist_1.xml": "5a5b41bb00adf4e892d4357e8c415094",
".idea/shelf/Uncommitted_changes_before_Update_at_3_24_2022_12_01_PM_%5BDefault_Changelist%5D/shelved.patch": "e453e43aa418322cfeeee3f3c0e0f407",
".idea/shelf/Uncommitted_changes_before_Update_at_3_24_2022_12_01_PM__Default_Changelist_.xml": "83d9bb2ae7bf869d29f769ecf1896606",
".idea/vcs.xml": "a8b625cb090fe904fb7338f6447f50ac",
".idea/web.iml": "24742e734b568c3f23d56498828ad0f3",
".idea/workspace.xml": "770d1bad677572787c80150539376a41",
"assets/AssetManifest.json": "795eca3eab9bdfa574b4be43200cd324",
"assets/assets/img.png": "c700e7e78d2aadec766bfe9b036a8038",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "141dfce880f0566a68ef43cec521197c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "93f6af1a234e946944becad54b723816",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "daba794ffef91b893dab6698e838cdb0",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3728eae40a5c7474b83d6137fa74a9d7",
"/": "3728eae40a5c7474b83d6137fa74a9d7",
"main.dart.js": "676b39f9f5ee56b5c252a1f58a8cb6d3",
"manifest.json": "52519db257cae7b06a9abe5bb029ea94",
"version.json": "67ec5478ab9cfdf9c5ff8dc3c8e6110c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
