[![Codacy Badge](https://api.codacy.com/project/badge/Grade/49b0de032f6a4a9bb212a7ad07cf95d7)](https://app.codacy.com/app/dreambo8563/vue-simple-drawer?utm_source=github.com&utm_medium=referral&utm_content=dreambo8563/vue-simple-drawer&utm_campaign=Badge_Grade_Settings)
[![codecov](https://codecov.io/gh/dreambo8563/vue-simple-drawer/branch/master/graph/badge.svg)](https://codecov.io/gh/dreambo8563/vue-simple-drawer)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
[![Build Status](https://travis-ci.org/dreambo8563/vue-simple-drawer.svg?branch=master)](https://travis-ci.org/dreambo8563/vue-simple-drawer) [![Greenkeeper badge](https://badges.greenkeeper.io/dreambo8563/vue-simple-drawer.svg)](https://greenkeeper.io/)
[![Known Vulnerabilities](https://snyk.io/test/github/dreambo8563/vue-simple-drawer/badge.svg?targetFile=package.json)](https://snyk.io/test/github/dreambo8563/vue-simple-drawer?targetFile=package.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![npm](https://img.shields.io/npm/dt/vue-simple-drawer.svg?style=flat)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdreambo8563%2Fvue-simple-drawer.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fdreambo8563%2Fvue-simple-drawer?ref=badge_shield)

# vue-simple-drawer

## TODO

- [x] remove shadow for default style
- [x] add cover layer option
- [x] rename the scss vars
- [x] nest drawer?

## Install

```
npm install vue-simple-drawer --save
```

### Quick Start

```js
<template>
  <div id="app">
    <button @click="toggle">toggle</button>
    <Drawer @close="toggle" align="left" :closeable="true">
      <div v-if="open">content here</div>
    </Drawer>
  </div>
</template>

<script>
import Drawer from "vue-simple-drawer"
export default {
  name: "app",
  data() {
    return {
      open: true
    }
  },
  components: {
    Drawer
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  }
}
</script>
```

### Prop Types

| Property     | Type    | Required? | Description                                                                                              |
| :----------- | :------ | :-------- | :------------------------------------------------------------------------------------------------------- |
| align        | String  |           | One of "left", "up", "right", "down", default is 'right'. the location of the drawer.                    |
| closeable    | Boolean |           | show the x - close button, default true                                                                  |
| mask         | Boolean |           | show the mask layer - close button, default true                                                         |
| maskClosable | Boolean |           | emit 'close' event when click on mask layer, default: false                                              |
| zIndex       | Number  |           | z-index value for the drawer, the nest drawer's z-index will be increased automatically, default is 1000 |

### Events

| Event | Params | Required? | Description                                          |
| :---- | :----- | :-------- | :--------------------------------------------------- |
| close | None   |           | will be triggered when user click the x close button |  |

### Slot

| Slot Name | Description                                                            |
| :-------- | ---------------------------------------------------------------------- |
| default   | the content display in the drawer which can show/hide the draw by v-if |

### Advance Guide

#### Nest Drawer

```js
   <button @click="toggle">Open/Close</button>
    <Drawer @close="toggle" :align="align" :closeable="true">
      <div v-if="open">
        <span @click="innerOpen=true">
          content here
          content here
          content here
          content here
          content here
          content here
          content here
        </span>
        <Drawer @close="innerOpen=false" :align="align" :closeable="true">
          <div v-if="innerOpen">
            content here
            content here
            content here
          </div>
        </Drawer>
      </div>
    </Drawer>

    ...

      data() {
        return {
          open: false,
          innerOpen: false,
          align: "left"
        };
      },
```

#### Customized Theme

- In your customized scss file (demo.scss)

```scss
$--simple-drawer-close-width: 50px;
@import "~vue-simple-drawer/src/index";
```

- import the scss to override the default theme in main.js (entry file) **after** you import the Draw component

```js
import "./demo.scss";
```

> variables

**close button style**

- \$--simple-drawer-softorange
- \$--simple-drawer-tomatored
- \$--simple-drawer-mediumblu

**close button size**

- \$--simple-drawer-close-width

**drawer background**

- \$--simple-drawer-bg-color

## License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdreambo8563%2Fvue-simple-drawer.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fdreambo8563%2Fvue-simple-drawer?ref=badge_large)

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://dreambo8563.github.io/"><img src="https://avatars2.githubusercontent.com/u/6948318?v=4" width="100px;" alt="Vincent Guo"/><br /><sub><b>Vincent Guo</b></sub></a><br /><a href="https://github.com/dreambo8563/vue-simple-drawer/commits?author=dreambo8563" title="Code">💻</a> <a href="https://github.com/dreambo8563/vue-simple-drawer/commits?author=dreambo8563" title="Documentation">📖</a> <a href="#infra-dreambo8563" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
