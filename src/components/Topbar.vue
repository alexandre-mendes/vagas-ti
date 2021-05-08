<template>
  <header class="topbar border-bottom">
    <b-container>
      <router-link to="/">
        <img src="../assets/logo.svg" alt="Vagas TI" />
      </router-link>

      <slot />
    </b-container>
  </header>
</template>

<script>
export default {
  name: 'Topbar',
};
</script>

<style lang="scss" scoped>
.topbar {
  padding: 1.25rem 0;

  & > .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
