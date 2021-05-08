<template>
  <b-sidebar id="filters" right no-header backdrop shadow>
    <template #default="{ hide }">
      <div class="p-3">
        <header class="sidebar-header">
          <h4>Filtros</h4>
          <b-link @click.prevent="hide">
            <x-icon size="24"></x-icon>
          </b-link>
        </header>

        <b-form>
          <div class="filter-group">
            <span>Linguagens</span>
            <b-form-checkbox>Javascript</b-form-checkbox>
            <b-form-checkbox>PHP</b-form-checkbox>
            <b-form-checkbox>Java</b-form-checkbox>
            <b-form-checkbox>C#</b-form-checkbox>
            <b-form-checkbox>Flutter</b-form-checkbox>
            <b-form-checkbox>Python</b-form-checkbox>
          </div>

          <div class="filter-group">
            <span>Área de Atuação</span>
            <b-form-checkbox>Desenvolvedor Backend</b-form-checkbox>
            <b-form-checkbox>Desenvolvedor Frontend</b-form-checkbox>
            <b-form-checkbox>Desenvolvedor Mobile</b-form-checkbox>
            <b-form-checkbox>Desenvolvedor Full Stack</b-form-checkbox>
          </div>

          <b-button variant="info" block>Aplicar Filtros</b-button>
        </b-form>
      </div>
    </template>
  </b-sidebar>
</template>

<script>
import { XIcon } from 'vue-feather-icons';

export default {
  name: 'Sidebar',
  components: {
    XIcon,
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h4 {
      font-size: 1.5rem;
      font-weight: 600;
      margin: 0;
    }

    a {
      color: #212529;
    }
  }
}

.filter-group {
  margin-bottom: 2rem;

  &:first-child {
    margin-top: 2rem;
  }

  & > span {
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    display: inline-block;
  }

  & > div {
    margin-top: 0.5rem;
  }
}
</style>
