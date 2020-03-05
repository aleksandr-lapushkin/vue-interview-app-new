<template>
  <div>
    <LoadingSpinner />
    <h6>Loading</h6>
  </div>
</template>

<script>
import LoadingSpinner from "./LoadingSpinner";

export default {
  name: "Loader",
  components: {
    LoadingSpinner
  }
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
