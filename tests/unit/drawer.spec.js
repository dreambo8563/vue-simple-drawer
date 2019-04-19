import { shallowMount } from "@vue/test-utils";
import Drawer from "../../src/index.vue";

describe("Drawer.vue", () => {
  it("renders props.align when passed", () => {
    const align = "left";
    const wrapper = shallowMount(Drawer, {
      propsData: { align },
      slots: {
        default: "<div>hello</div>"
      }
    });

    expect(wrapper.vm.alignInCls).toBe("animated bounceInleft");
    expect(wrapper.vm.alignOutCls).toBe("animated bounceOutleft");
    expect(wrapper.vm.alighCloseCls).toBe("close-left");
  });

  it("renders default slots when passed", () => {
    const wrapper = shallowMount(Drawer, {
      slots: {
        default: "<div>hello</div>"
      }
    });

    expect(wrapper.find(".vue-simple-drawer").isVisible()).toBeTruthy();
    expect(wrapper.find(".mask").isVisible()).toBeTruthy();
  });

  it("renders props with mask false when passed", () => {
    const wrapper = shallowMount(Drawer, {
      propsData: { mask: false },
      slots: {
        default: "<div>hello</div>"
      }
    });

    expect(wrapper.find(".vue-simple-drawer").isVisible()).toBeTruthy();
    expect(wrapper.find(".mask").exists()).not.toBeTruthy();
  });
});
