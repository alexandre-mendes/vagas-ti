<template>
  <div>
    <!-- Header -->
    <topbar>
      <b-button @click="navigateToJobs" class="button-access" variant="info">
        <briefcase-icon size="20" />
        Acessar vagas
      </b-button>
    </topbar>
  </div>
</template>

<script>
import { BriefcaseIcon } from 'vue-feather-icons';
import Topbar from '@/components/Topbar.vue';

export default {
  components: {
    BriefcaseIcon,
    Topbar,
  },
  methods: {
    navigateToJobs() {
      this.$router.push({ name: 'Jobs' });
    },
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
</style>
