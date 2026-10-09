# xiangxingtech site

https://xiangxingtech.com のソースです。Astro + Tailwind CSS で作り、Cloudflare Workers の静的アセットとして配信しています。

最初の版(2018-11-09)は Ionic PWA Toolkit で作っていました。

```sh
npm install
npm run dev     # http://localhost:4321
npm run deploy  # ビルドして Cloudflare にデプロイ
```

`public/sw.js` は旧サイトの service worker を解除するためのファイルです。旧サイトを開いたことのあるブラウザが残っている間は消さないでください。
