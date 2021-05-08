<template>
  <div class="loading-container">
    <b-spinner class="loading-spinner" variant="info"></b-spinner>
  </div>
</template>

<script>
export default {
  name: 'Loading',
};
</script>

<style lang="scss" scoped>
.loading {
  &-container {
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &-spinner {
    height: 50px;
    width: 50px;
  }
}
</style>
