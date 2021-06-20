<template>
  <div>
    <!-- Header -->
    <topbar>
      <b-button @click="handleBack()" class="button-home" variant="success">
        <arrow-left-icon size="20" />
        Página Inicial
      </b-button>
    </topbar>

    <!-- Loading -->
    <loading v-if="isLoading" />

    <!-- Error -->
    <b-container class="mt-4" v-else-if="error">
      <b-alert show variant="danger">{{ error }}</b-alert>
    </b-container>

    <!-- Main Content -->
    <main v-else>
      <b-container>
        <b-table striped hover :items="items" :fields="fields">
          <template #cell(posicao)="data">
            <div class="ranking-position">
              {{ `${data.index + 1}° lugar` }}

              <award-icon
                :color="colors[data.index]"
                size="20"
                v-if="data.index + 1 <= 3"
              />
            </div>
          </template>

          <template #cell(percentual)="data">
            <b-badge
              class="ranking-percentage"
              :variant="data.item.percentual >= 0 ? 'success' : 'danger'"
            >
              {{ `${data.item.percentual}% de crescimento` }}
            </b-badge>
          </template>
        </b-table>
      </b-container>
    </main>
  </div>
</template>

<script>
import { ArrowLeftIcon, AwardIcon } from 'vue-feather-icons';
import { api } from '@/services/api';
import Topbar from '@/components/Topbar.vue';
import Loading from '@/components/Loading.vue';

export default {
  components: {
    ArrowLeftIcon,
    AwardIcon,
    Topbar,
    Loading,
  },
  data() {
    return {
      colors: ['#ffc107', '#6c757d', '#fd7e14'],
      isLoading: true,
      items: [],
      error: null,
      fields: [
        { key: 'posicao', label: 'Posição' },
        { key: 'linguagem', label: 'Linguagem' },
        { key: 'percentual', label: 'Percentual' },
      ],
    };
  },
  methods: {
    handleBack() {
      this.$router.go(-1);
    },
  },
  async mounted() {
    try {
      const { data } = await api.get('ritmo-crescimento');
      this.items = data
        .map(item => {
          if (item.linguagem === 'CSHARP') {
            return { ...item, linguagem: 'C#' };
          } else if (item.linguagem === 'CPLUSPLUS') {
            return { ...item, linguagem: 'C++' };
          } else {
            return item;
          }
        })
        .sort((a, b) => b.percentual - a.percentual);
    } catch {
      this.error = 'Problema ao carregar os dados';
    } finally {
      this.isLoading = false;
    }
  },
};
</script>

<style lang="scss" scoped>
.button-home {
  display: flex;
  align-items: center;

  & > svg {
    margin-right: 0.5rem;
  }
}

main {
  padding: 2.5rem 0;
}

.ranking-percentage {
  font-size: 14px;
}
</style>
