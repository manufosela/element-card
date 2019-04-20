# \<element-card\>
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/owner/my-element)

## Demo
[element-card codepen demo](https://codepen.io/manufosela/pen/wZXopo)

<!--
```
<custom-element-demo>
  <template>
    <script type="module" src="../element-card.js"></script>
    <script type="module" src="/node_modules/@manufosela/nav-list/nav-list.js"></script>
    <script type="module" src="/node_modules/@manufosela/circle-percent/circle-percent.js"></script>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
  <element-card id="second" 
        title="Javascript"
        description="Advocate. ES6, ES7, functional programming"
        imgcover="https://banner2.kisspng.com/20180429/www/kisspng-javascript-logo-html-comment-blog-5ae63c22d40699.0773573515250381148685.jpg"
        coverBgColor="rgba(255, 255, 0, 0.3)"
        textcolor="#000">
        DEMO TEXT INTO ELEMENT-CARD
  </element-card>
```
## CSS Variables
--imgcover-max-width
--imgcover-opacity

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) and npm (packaged with [Node.js](https://nodejs.org)) installed. Run `npm install` to install your element's dependencies, then run `polymer serve` to serve your element locally.

## Viewing Your Element

```
$ polymer serve
```

## Running Tests

```
$ polymer test
```

## Build
```
npm run build
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.
