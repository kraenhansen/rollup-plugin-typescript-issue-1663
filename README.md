# Reproduction of `@rollup/plugin-typescript` issue #1663

This is a minimal reproduction for https://github.com/rollup/plugins/issues/1663

Steps to reproduce:
- `npm install`
- `npm test`
- `cat dist/bundle.js` and notice how `some-js-file` and `some-json-file` are not included in the bundle.
- Edit `rollup.config.mjs` by removing the comment from `include: '{,**/}*.(cts|mts|ts|tsx|js|mjs|json)`
- `npm test`
- `cat dist/bundle.js` and notice how `some-js-file` and `some-json-file` are now resolved as expected and even de-duplicated.
