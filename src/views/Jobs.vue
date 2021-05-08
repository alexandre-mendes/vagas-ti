<template>
  <div>
    <!-- Header -->
    <topbar>
      <b-input-group class="search-group">
        <b-form-input
          @keyup.enter="search"
          v-model="text"
          placeholder="Pesquise pelo cargo ou empresa"
        />

        <b-input-group-append>
          <b-button @click="search">
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
        <div class="filters">
          <b-link v-b-toggle.filters>
            Filtrar vagas
            <filter-icon size="24" />
          </b-link>
        </div>

        <div class="grid">
          <job-item v-for="job in jobsFiltered" :key="job.id" :job="job" />
        </div>
      </b-container>
    </main>

    <!-- Sidebar -->
    <sidebar />
  </div>
</template>

<script>
import { SearchIcon, FilterIcon } from 'vue-feather-icons';
import { api } from '@/services/api';

import Topbar from '@/components/Topbar.vue';
import Loading from '../components/Loading.vue';
import JobItem from '../components/JobItem.vue';
import Sidebar from '../components/Sidebar.vue';

export default {
  name: 'Jobs',
  components: {
    SearchIcon,
    FilterIcon,
    Topbar,
    Loading,
    JobItem,
    Sidebar,
  },
  data() {
    return {
      text: '',
      loading: true,
      jobs: [],
      jobsFiltered: [],
    };
  },
  methods: {
    search() {
      this.jobsFiltered = this.jobs.filter(job => {
        return (
          job.title.toLowerCase().includes(this.text) ||
          job.company.toLowerCase().includes(this.text)
        );
      });
    },
  },
  async mounted() {
    try {
      const response = await api.get('jobs');
      this.jobs = response.data;
      this.jobsFiltered = response.data;
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
  padding-bottom: 2.5rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
}

.filters {
  width: 100%;
  display: flex;
  padding: 1.5rem 0;
  justify-content: flex-end;

  a {
    display: flex;
    align-items: center;
    color: #212529;
    text-decoration: none;
    transition: all 0.15s ease-in-out;

    &:hover {
      color: var(--blue);
    }
  }

  svg {
    margin-left: 0.5rem;
  }
}
</style>
