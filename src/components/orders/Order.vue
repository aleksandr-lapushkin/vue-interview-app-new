<template>
  <div>
    <div class="row">
      <router-link to="/"> <button>Home</button> </router-link>
      <button class="button-primary" v-on:click="saveOrder();">Save</button>
    </div>

    <form>
      <div class="row">
        <div class="columns six">
          <label htmlFor="title">Title</label>
          <input
            class="u-full-width"
            id="title"
            type="text"
            required
          />
        </div>

        <div class="columns six">
          <label htmlFor="status">Status</label>
          <select class="u-full-width" id="status" required>
            <option
              v-bind:key="status"
              v-for="status in allStatuses"
              v-bind:value="status"
            >
              {{ status }}</option
            >
          </select>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { Orders } from "../../model";

export default {
  name: "Order",
  components: {},
  data: () => {
    return {
      allStatuses: Object.keys(Orders.Status)
    };
  },
  methods: {
    saveOrder: function() {
      //TODO: implement
      console.log("Saving");
    }
  },
  props: []
};
</script>
