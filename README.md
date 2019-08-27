# js-accordion

[![npm version](https://badge.fury.io/js/js-accordion.svg)](https://badge.fury.io/js/js-accordion)
![licence](https://img.shields.io/badge/licence-MIT-blue.svg?style=flat) 
[![Build Status](https://travis-ci.org/kappys1/js-accordion.svg?branch=master)](https://travis-ci.org/kappys1/js-accordion)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## [Example](https://kappys1.github.io/js-accordion/) 

## Install

```shell
npm i js-accordion --save
```

In a browser:
```html
<script src="path/js/js-accordion.min.js"></script>
<link href="path/css/js-accordion.min.css" rel="stylesheet">
```

Load ES module:
```js
import "js-accordion/css/js-accordion.css"; //if is necesary.
import Accordion from 'js-accordion';
```

## Usage

**you must import the style in html or script.**

### html

***this structure with your id***

``` html
<dl id="accordion">
  <dt>Section 1</dt>
  <dd>
    <p>Section 1 Content...</p>
  </dd>
  <dt>Section 2</dt>
  <dd>
    <p>Section 2 Content...</p>
  </dd>
  <dt>Section 3</dt>
  <dd>
    <p>Section 3 Content...</p>
  </dd>
</dl>
```

### Script

```js
import "js-accordion/css/js-accordion.css"; // es6 example
import Accordion from 'js-accordion'

const id = 'accordion'
const accordion = new Accordion(id [, config]) // config is a optional param

````

## API

### config

| Attribute | type | default | example | description |
| --------- | ---- | ------- | --- | -- |
| maxHeight | String | 'none' | "150px" | set max height of accordion content when is opened |
| withTransition | Boolean | true | true / false | effect when open and close
| withAutoClose | Boolean | true | true / false | close others accordions than you not click
| onToggle | Event | () => {} | (accordion) => {} | event when one content of accordion is opened.

### variables

- element : Root Accordion element
- config : Accordion config
- accordionItems: Array of Accordion Items, each accordion with heder and content.

### functions

- update() : if you add new content, this update the accordion.
- toggleAccordion(accordion): if you want use it in javascript pass a accordion to close or open. 

## theme

you can change the default theme changing this css variables.
``` css 
  --accordion-header-fz: 16px;
  --accordion-header-icon-fz: 1.5em;
  --accordion-header-height: 2.2em;
  --accordion-header-padding: 0 1em;
  --accordion-border-width: 1px;
  --accordion-border-radius-width: 0px;
  --accordion-time-transition: 0.4s;
  --accordion-function-transition: ease-in-out;

  --accordion-header-background-color: #f0f0f0;
  --accordion-header-border-color: #444444;
  --accordion-header-text-color: #444444;
  --accordion-body-background-color: white;
  --accordion-body-border-color: #444444;
  --accordion-body-text-color: #444444;
```

## CI

#### pipeline

| Branches    | Stages     | site                                                           |
| ----------- | ---------- | -------------------------------------------------------------- |
| Staging |  Staging   | [heroku](https://js-accordion-staging.herokuapp.com/)       |
| Master  | Production | [Github Pages](https://kappys1.github.io/js-accordion/) |

## Conditions

- [x] Use Sass for generate CSS
- [x] Use ES6
- [x] Use only Vanilla JS, without any JS framework
- [x] Generate gh-page for publish

### Bonus

- [x] Add new section with Ajax content

## Author

Alex Marcos Gutierrez

## License

MIT
