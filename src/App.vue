<template>
  <div id="app">
    <div class="demo-container">
      <div>
        <input type="radio" id="left" value="left" v-model="align" />
        <label for="left">left</label>
      </div>

      <div>
        <input type="radio" id="right" value="right" v-model="align" />
        <label for="right">right</label>
      </div>

      <div>
        <input type="radio" id="up" value="up" v-model="align" />
        <label for="up">up</label>
      </div>

      <div>
        <input type="radio" id="down" value="down" v-model="align" />
        <label for="down">down</label>
      </div>
    </div>

    <button @click="toggle">Open/Close</button>
    <Drawer @close="toggle" :align="align" :closeable="true">
      <div v-if="open">content here</div>
    </Drawer>
  </div>
</template>

<script>
import Drawer from "@/Drawer";
import "./demo.scss";
export default {
  name: "app",
  data() {
    return {
      open: false,
      align: "left"
    };
  },
  components: {
    Drawer
  },
  methods: {
    toggle() {
      this.open = !this.open;
    }
  },
  watch: {
    align: function() {
      this.open = false;
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
  .demo-container {
    display: flex;
    margin: 0 auto;
    justify-content: space-around;
    width: 60%;
    align-content: center;
    align-items: center;
  }
}
</style>
