[![Build Status](https://travis-ci.org/dreambo8563/vue-simple-drawer.svg?branch=master)](https://travis-ci.org/dreambo8563/vue-simple-drawer)

# vue-simple-drawer

## Install

```
npm install vue-simple-drawer --save
```

### Quick Start

```js
<template>
  <div id="app">
    <button @click="close">toggle</button>
    <Drawer @close="close" align="left" :closeable="true">
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
    close() {
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
| closeable | Boolean |           | If show the x - close button                                                          |

### Events

| Event | Params | Required? | Description                                          |
| :---- | :----- | :-------- | :--------------------------------------------------- |
| close | None   |           | will be triggered when user click the x close button |  |

### Slot

| Slot Name | Description                                                            |
| :-------- | ---------------------------------------------------------------------- |
| default   | the content display in the drawer which can show/hide the draw by v-if |
