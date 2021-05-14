<template>
  <div>
    <!-- Header -->
    <topbar>
      <b-button
        @click="navigateToRanking"
        class="button-access"
        variant="success"
      >
        <award-icon size="20" />
        Acessar ranking
      </b-button>
    </topbar>

    <!-- Main Content -->
    <main id="main-content">
      <b-container>
        <header>
          <h3 class="font-weight-bold">Números de vagas por linguagem</h3>
          <div class="last-update">
            <calendar-icon size="18" />
            <span>Ultima atualização: 28/04/2021 às 09h00</span>
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
import { options } from '@/utils/barChartOptions';

import Topbar from '@/components/Topbar.vue';

export default {
  components: {
    AwardIcon,
    CalendarIcon,
    Topbar,
  },
  data() {
    return {
      options,
      series: [
        {
          name: 'Vagas',
          data: [
            26.259,
            24.248,
            13.523,
            11.757,
            8.584,
            8.111,
            4.971,
            4.417,
            4.038,
            3.243,
          ],
        },
      ],
    };
  },
  methods: {
    navigateToRanking() {},
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
