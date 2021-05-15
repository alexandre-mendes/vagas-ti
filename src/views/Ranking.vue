<template>
  <div>
    <!-- Header -->
    <topbar>
      <b-button @click="handleBack()" class="button-home" variant="success">
        <arrow-left-icon size="20" />
        Página Inicial
      </b-button>
    </topbar>

    <main>
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
            <b-badge class="ranking-percentage" variant="info">
              {{ `${data.item.percentual}% das vagas` }}
            </b-badge>
          </template>
        </b-table>
      </b-container>
    </main>
  </div>
</template>

<script>
import { ArrowLeftIcon, AwardIcon } from 'vue-feather-icons';
import Topbar from '@/components/Topbar.vue';

export default {
  components: {
    ArrowLeftIcon,
    AwardIcon,
    Topbar,
  },
  data() {
    return {
      colors: ['#ffc107', '#6c757d', '#fd7e14'],
      items: [
        { linguagem: 'C', percentual: 80 },
        { linguagem: 'DELPHI', percentual: 60 },
        { linguagem: 'PYTHON', percentual: 40 },
        { linguagem: 'PHP', percentual: 30 },
        { linguagem: 'RUBY', percentual: 20 },
        { linguagem: 'JAVA', percentual: 10 },
        { linguagem: 'JAVASCRIPT', percentual: 5 },
      ],
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
