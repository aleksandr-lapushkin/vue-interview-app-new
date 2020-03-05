<template>
  <div>
    <div class="row">
      <div class="columns twelve">
        <router-link to="/new">
          <button class="button-primary">New</button>
        </router-link>
        <button v-on:click="onRefresh">Refresh</button>
      </div>
    </div>
    <div class="row">
      <div class="columns twelve">
        <table class="u-full-width" v-if="loaded">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <OrderRow
              v-for="order in orders"
              v-bind:key="order.id"
              v-bind:order="order"
            />
          </tbody>
        </table>
        <Loader class="columns twelve" v-if="!loaded" />
      </div>
    </div>
  </div>
</template>

<script>
import OrderRow from "./OrderRow";
import Loader from "../Loader";

export default {
  name: "OrderList",
  components: {
    OrderRow,
    Loader
  },
  data: () => {
    return {
      loaded: false,
      orders: []
    };
  },
  created: function() {
    this.fetchOrders().then(orders => {
      this.loaded = true;
      this.orders = orders;
    });
  },
  methods: {
    fetchOrders: function() {
      return this.$ordersDao.fetchAll();
    },
    onRefresh: function() {
      this.loaded = false;
      this.fetchOrders().then(orders => {
        this.loaded = true;
        this.orders = orders;
      });
    }
  }
};
</script>

<style scoped>
table {
  border-collapse: collapse;
}
</style>
