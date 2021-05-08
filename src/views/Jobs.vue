<template>
  <div>
    <!-- Header -->
    <topbar>
      <b-input-group class="search-group">
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

    <!-- Loading -->
    <loading v-if="loading" />

    <!-- Main Content -->
    <main id="main-content" v-else>
      <b-container>
        <div class="grid">
          <job-item v-for="job in jobs" :key="job.id" :job="job" />
        </div>
      </b-container>
    </main>
  </div>
</template>

<script>
import { SearchIcon } from 'vue-feather-icons';
import { api } from '@/services/api';

import Topbar from '@/components/Topbar.vue';
import Loading from '../components/Loading.vue';
import JobItem from '../components/JobItem.vue';

export default {
  name: 'Jobs',
  components: {
    Topbar,
    SearchIcon,
    Loading,
    JobItem,
  },
  data() {
    return {
      text: '',
      loading: true,
      jobs: [],
    };
  },
  async mounted() {
    try {
      const response = await api.get('jobs');
      this.jobs = response.data;
    } catch (error) {
      console.error(error.message);
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style lang="scss" scoped>
.search-group {
  max-width: 400px;

  @media screen and (max-width: 768px) {
    margin-top: 0.5rem;
    max-width: 100%;
  }

  button {
    font-size: 0;
  }
}

#main-content {
  padding: 2.5rem 0;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
}
</style>
