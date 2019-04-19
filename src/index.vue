<template>
  <div>
    <transition name="fade" mode="out-in">
      <div
        :style="indexCls()"
        @click="onMask"
        v-if="$slots.default"
        :class="{ mask }"
      ></div>
    </transition>
    <transition
      :enter-active-class="alignInCls"
      :leave-active-class="alignOutCls"
    >
      <div
        key="content"
        :class="{ closeable, [align.toLowerCase()]: true }"
        v-if="$slots.default"
        class="vue-simple-drawer cover"
        :style="indexCls()"
      >
        <div @click.stop="close" v-if="closeable" class="close-btn">
          <div class="leftright"></div>
          <div class="rightleft"></div>
        </div>
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    align: {
      type: String,
      default: "right",
      validator: function(value) {
        // The value must match one of these strings
        return ["left", "up", "right", "down"].indexOf(value) !== -1;
      }
    },
    closeable: {
      type: Boolean,
      default: true
    },
    mask: {
      type: Boolean,
      default: true
    },
    maskClosable: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: Number,
      default() {
        return this.simpleDrawerIndex;
      }
    }
  },
  provide() {
    return {
      simpleDrawerIndex: this.computedIndex + 1
    };
  },
  inject: {
    simpleDrawerIndex: { default: 1000 }
  },

  methods: {
    close() {
      this.$emit("close");
    },
    onMask() {
      if (this.maskClosable) {
        this.close();
      }
    },
    indexCls(offset = 0) {
      return {
        zIndex: this.computedIndex + offset
      };
    }
  },
  computed: {
    alignInCls() {
      return `animated bounceIn${this.align.toLowerCase()}`;
    },
    alignOutCls() {
      return `animated bounceOut${this.align.toLowerCase()}`;
    },
    alighCloseCls() {
      return `close-${this.align.toLowerCase()}`;
    },
    computedIndex() {
      return this.zIndex || this.simpleDrawerIndex;
    }
  }
};
</script>
<style lang="scss">
@import "index";
</style>
