<template>
  <div>
    <!-- Header -->
    <topbar>
      <b-button
        @click="navigateToRanking()"
        class="button-access"
        variant="success"
      >
        <award-icon size="20" />
        Acessar ranking
      </b-button>
    </topbar>

    <!-- Loading -->
    <loading v-if="isLoading" />

    <!-- Error -->
    <b-container class="mt-4" v-else-if="error">
      <b-alert show variant="danger">{{ error }}</b-alert>
    </b-container>

    <!-- Main Content -->
    <main v-else id="main-content">
      <b-container>
        <header>
          <h3 class="font-weight-bold">Números de vagas por linguagem</h3>
          <div class="last-update">
            <calendar-icon size="18" />
            <span>{{ updateAt }}</span>
          </div>
        </header>

        <b-card>
          <apexchart
            type="bar"
            height="350"
            :options="options"
            :series="series"
          ></apexchart>
        </b-card>
      </b-container>
    </main>
  </div>
</template>

<script>
import { AwardIcon, CalendarIcon } from 'vue-feather-icons';
import { api } from '../services/api';
import Topbar from '@/components/Topbar.vue';
import Loading from '@/components/Loading.vue';

export default {
  components: {
    AwardIcon,
    CalendarIcon,
    Topbar,
    Loading,
  },
  data() {
    return {
      options: {
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          },
        },
        chart: {
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: true,
          style: {
            fontFamily: 'Poppins',
            fontSize: 14,
          },
        },
        xaxis: {
          categories: [],
          labels: {
            style: {
              fontFamily: 'Poppins',
              fontSize: 14,
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              fontFamily: 'Poppins',
              fontSize: 14,
            },
          },
        },
        tooltip: {
          style: {
            fontSize: 14,
            fontFamily: 'Poppins',
          },
        },
        fill: {
          colors: ['#17a2b8'],
        },
      },
      series: [],
      isLoading: true,
      error: null,
    };
  },
  computed: {
    updateAt() {
      const dateFormat = new Intl.DateTimeFormat('pt-BR').format(new Date());
      return `Ultima atualização: ${dateFormat}`;
    },
  },
  methods: {
    navigateToRanking() {
      this.$router.push({ name: 'ranking' });
    },
  },
  async mounted() {
    try {
      const { data } = await api.get('modelo-grafico');
      const series = data.map(item => item.quantidade);
      const languages = data.map(item => item.linguagem);

      this.series = [{ name: 'Vagas', data: series }];
      this.options.xaxis.categories = languages;
    } catch {
      this.error = 'Problema ao carregar o gráfico';
    } finally {
      this.isLoading = false;
    }
  },
};
</script>

<style lang="scss" scoped>
.button-access {
  display: flex;
  align-items: center;

  & > svg {
    margin-right: 0.5rem;
  }
}

#main-content {
  padding: 2.5rem 0;

  header {
    margin-bottom: 2.5rem;
  }

  h3 {
    @media screen and (max-width: 800px) {
      font-size: 1.5rem;
    }
  }
}

.last-update {
  display: flex;
  align-items: center;
  color: var(--gray);

  svg {
    margin-right: 0.5rem;
  }
}
</style>
