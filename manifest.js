{
    "name": "Chromingorou",
    "version": "0.0.1",
    "manifest_version": 3,
    "author": "satoshin",
    "icons": {
        "48": "icon/icon.png"
    },
    "description": "就活で出くわすIT用語などを日本語に翻訳してくれる拡張機能．",
    "content_scripts": [
        {
            "matches": [
                "<all_urls>"
            ],
            "js": ["main.js"]
        }
    ],
    "homepage_url": "https://github.com/satoshin-des/Shu-katuJargonTransformer"
}
