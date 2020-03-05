import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import OrderList from "../../src/components/orders/OrderList.vue";
import OrderRow from "../../src/components/orders/OrderRow.vue";
import Loader from "../../src/components/Loader.vue";
import Vue from "vue";

test("OrderList is loading", () => {
  const wrapper = shallowMount(OrderList, {
    stubs: {
      loader: Loader,
      "router-link": RouterLinkStub
    },
    mocks: {
      $ordersDao: {
        fetchAll: () => new Promise(() => {})
      }
    }
  });
  expect(wrapper.find(Loader).is(Loader)).toEqual(true);
  expect(wrapper.find(Loader).text()).toEqual("Loading");
  expect(wrapper.html()).toMatchSnapshot();
});

test("OrderList has 1 row", async () => {

  const promise = Promise.resolve([
    { id: 123, title: "hello world", status: "PROCESSING" }
  ]);
  const wrapper = shallowMount(OrderList, {
    stubs: {
      loader: Loader,
      "order-row": OrderRow,
      "router-link": RouterLinkStub
    },
    mocks: {
      $ordersDao: {
        fetchAll: () => promise
      }
    }
  });

  await Vue.nextTick();

  expect(wrapper.findAll(Loader).length).toEqual(0);
  expect(wrapper.findAll(OrderRow).length).toEqual(1);
  expect(wrapper.find(OrderRow).props("order")).toEqual({
    id: 123,
    title: "hello world",
    status: "PROCESSING"
  });
  expect(wrapper.html()).toMatchSnapshot();
});
