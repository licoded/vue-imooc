> From https://github.com/wangtunan/vue-mooc/tree/9ad269e/src

### Vue@2.x Project Initialization

```bash
vue create .
```

### Install External dependencies

```bash
npm i --save axios vue-router vuex element-ui
npm i --save crypto-js good-storage
npm i -D stylus stylus-loader@3.0.2
```

### Imgbed URL 403

Set no-referrer header in Vue's template html file.

```html
<meta name="referrer" content="no-referrer">
```

Sadly, the CSS property `background-image` is not controlled by this setting. 