<template>
  <div class="LoadingSpinner" />
</template>

<script>
export default {
  name: "LoadingSpinner"
};
</script>

<style scoped>
div {
  width: 40px;
  height: 40px;
  border-top: 2px solid black;
  border-right: 2px solid black;
  border-bottom: 2px solid black;
  border-left: 2px solid rgba(0, 0, 0, 0);
  border-radius: 40px;
  animation: LoadingSpinnerAnimation;
  animation-iteration-count: infinite;
  animation-duration: 700ms;
}

@keyframes LoadingSpinnerAnimation {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
</style>
