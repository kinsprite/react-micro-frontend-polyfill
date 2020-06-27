
# React Micro Frontend Polyfill

React polyfill for modern browsers and IE9/IE11.

This is a special Micro Frontend, you should include one of `entrypoints` in HTML file only, NOT all of them.

Entrypoints in `rmf-manifest.json`:

```json
{
  "entrypoints": [
    "/rmf-polyfill/89381594/polyfill.f5d9d209.js",
    "/rmf-polyfill/89381594/polyfill-ie9.1f7e138c.js",
    "/rmf-polyfill/89381594/polyfill-ie11.3a1d4b4b.js"
  ]
}
```

## Example

Site: https://micro.qinzhiqiang.cn
