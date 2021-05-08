<template>
  <div>
    <!-- Header -->
    <topbar>
      <b-input-group class="input-group">
        <b-form-input
          v-model="text"
          placeholder="Pesquise pelo cargo ou empresa"
        />

        <b-input-group-append>
          <b-button :disabled="!text">
            <search-icon size="20" />
          </b-button>
        </b-input-group-append>
      </b-input-group>
    </topbar>
  </div>
</template>

<script>
import { SearchIcon } from 'vue-feather-icons';
import Topbar from '@/components/Topbar.vue';

export default {
  name: 'Jobs',
  components: {
    Topbar,
    SearchIcon,
  },
  data() {
    return {
      text: '',
    };
  },
};
</script>

<style lang="scss" scoped>
.input-group {
  max-width: 400px;

  button {
    font-size: 0;
  }
}
</style>
