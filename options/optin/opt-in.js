var ext_api = chrome || browser;
var manifestData = ext_api.runtime.getManifest();
var ext_chromium = !!manifestData.key;
var ext_manifest_version = manifestData.manifest_version;
var navigator_ua = navigator.userAgent;
var navigator_ua_mobile = navigator_ua.toLowerCase().includes('mobile');
var chrome_android_browser = navigator_ua_mobile && ext_chromium;
var custom_switch = ((manifestData.optional_permissions && manifestData.optional_permissions.length) || (manifestData.optional_host_permissions && manifestData.optional_host_permissions.length));

window.addEventListener("load", function () {
    document.getElementById("button-close").addEventListener("click", function () {
        ext_api.storage.local.set({
            "optInShown": true,
            "customShown": true,
            "fetchShown": true
        });
        window.close();
    });

    var opt_in_enabled = document.getElementById('opt-in-enabled');
    ext_api.storage.local.get("optIn", function (result) {
        opt_in_enabled.innerText = result.optIn ? '是' : '否';
    });
    var mv3_remove_perm_msg = document.getElementById('mv3-remove-perm-msg');

    document.getElementById("optin-enable").addEventListener("click", function () {
        ext_api.storage.local.set({
            "optIn": true,
            "optInShown": true
        });
        opt_in_enabled.innerText = '是';
    });

    document.getElementById("optin-disable").addEventListener("click", function () {
        ext_api.storage.local.set({
            "optIn": false,
            "optInShown": true
        });
        opt_in_enabled.innerText = '否';
    });

    var custom_enabled = document.getElementById('custom-enabled');
    ext_api.permissions.contains({
        origins: ["*://*/*"]
    }, function (result) {
        if (result) {
            custom_enabled.innerText = '是';
        } else {
            custom_enabled.innerText = '否';
        }
    });

    var custom_prompt = document.getElementById('custom-prompt');
    if (chrome_android_browser) {
      var android_span = document.createElement('span');
      android_span.innerText = '* 在 Android 上启用自定义站点选项，可能需要使用 android-custom crx 版本。';
      custom_prompt.appendChild(android_span);
    }

    if (custom_switch) {

    document.querySelector('#custom-enable').addEventListener('click', function (event) {
        ext_api.permissions.request({
            origins: ["*://*/*"]
        }, function (granted) {
            if (granted) {
                custom_enabled.innerText = '是';
                ext_api.storage.local.set({
                    "customOptIn": true
                });
                if (ext_manifest_version === 3)
                  mv3_remove_perm_msg.innerText = '';
            } else {
                custom_enabled.innerText = '否';
            }
            ext_api.storage.local.set({
                "customShown": true
            });
        });
    });

    document.querySelector('#custom-disable').addEventListener('click', function (event) {
        ext_api.permissions.remove({
            origins: ["*://*/*"]
        }, function (removed) {
            if (removed) {
                custom_enabled.innerText = '否';
                ext_api.storage.local.set({
                    "customOptIn": false
                });
                if (ext_manifest_version === 3) {
                  mv3_remove_perm_msg.innerText = '扩展将重新加载以应用可选主机权限的更改。';
                  ext_api.runtime.reload();
                }
            }
            ext_api.storage.local.set({
                "customShown": true
            });
        });
    });

    }// custom_switch

    var update_enabled = document.getElementById('update-enabled');
    ext_api.storage.local.get({optInUpdate: true}, function (result) {
        update_enabled.innerText = result.optInUpdate ? '是' : '否';
    });

    document.getElementById("update-enable").addEventListener("click", function () {
        ext_api.storage.local.set({
            "optInUpdate": true
        });
        update_enabled.innerText = '是';
    });

    document.getElementById("update-disable").addEventListener("click", function () {
        ext_api.storage.local.set({
            "optInUpdate": false
        });
        update_enabled.innerText = '否';
    });

    if (!ext_chromium) { // fetch consent (Firefox only)

    var fetch_enabled = document.getElementById('fetch-enabled');
    ext_api.storage.local.get("optInFetch", function (result) {
        fetch_enabled.innerText = result.optInFetch ? '是' : '否';
    });

    document.getElementById("fetch-enable").addEventListener("click", function () {
        ext_api.storage.local.set({
            "optInFetch": true,
            "fetchShown": true
        });
        fetch_enabled.innerText = '是';
    });

    document.getElementById("fetch-disable").addEventListener("click", function () {
        ext_api.storage.local.set({
            "optInFetch": false,
            "fetchShown": true
        });
        fetch_enabled.innerText = '否';
    });

    } else {
      let fetch_prompt = document.querySelector('div#fetch-prompt');
      if (fetch_prompt)
        fetch_prompt.style = 'display: none';
    }

});
