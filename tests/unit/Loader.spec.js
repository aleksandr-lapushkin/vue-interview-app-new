import { shallowMount } from "@vue/test-utils";
import Loader from "../../src/components/Loader.vue";

test("Loader", () => {
  const wrapper = shallowMount(Loader);
  expect(wrapper.text()).toBe("Loading");
});
