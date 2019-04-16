<template>
  <div id="app">
    <button @click="close">toggle</button>
    <Drawer @close="close" align="left" :closeable="true">
      <div v-if="open">content here</div>
    </Drawer>
  </div>
</template>

<script>
import Drawer from "@/components/Drawer";

export default {
  name: "app",
  data() {
    return {
      open: true
    };
  },
  components: {
    Drawer
  },
  methods: {
    close() {
      this.open = !this.open;
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
