<template>
  <tr>
    <td class="order-id">{{ order.id }}</td>
    <td class="order-title">{{ order.title }}</td>
    <td class="order-status">{{ order.status }}</td>
  </tr>
</template>

<script>
export default {
  name: "OrderRow",
  props: ["order"]
};
</script>

<style scoped>
td {
  padding: 1em;
}
tr:hover {
  background: #eee;
  transition-duration: 300ms;
  cursor: pointer;
}
</style>
