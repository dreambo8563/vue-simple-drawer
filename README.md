[![Build Status](https://travis-ci.org/dreambo8563/vue-simple-drawer.svg?branch=master)](https://travis-ci.org/dreambo8563/vue-simple-drawer)

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

| Property  | Type    | Required? | Description                                                                           |
| :-------- | :------ | :-------- | :------------------------------------------------------------------------------------ |
| align     | String  |           | One of "left", "up", "right", "down", default is 'right'. the location of the drawer. |
| closeable | Boolean |           | show the x - close button, default true                                               |
| mask      | Boolean |           | show the mask layer - close button, default true                                      |

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

- import the scss to override the default theme in main.js (entry file) before you import the Draw component

```js
import "./demo.scss"
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
