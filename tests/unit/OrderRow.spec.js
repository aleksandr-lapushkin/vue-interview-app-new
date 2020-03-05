import { shallowMount } from "@vue/test-utils";
import OrderRow from "../../src/components/orders/OrderRow.vue";

test("OrderRow has correct values", () => {
  const wrapper = shallowMount(OrderRow, {
    propsData: {
      order: { id: 123, title: "hello world", status: "PROCESSING" }
    }
  });
  expect(wrapper.find(".order-id").text()).toEqual("123");
  expect(wrapper.find(".order-title").text()).toEqual("hello world");
  expect(wrapper.find(".order-status").text()).toEqual("PROCESSING");
  expect(wrapper.html()).toMatchSnapshot();
});
