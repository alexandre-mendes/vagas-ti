<template>
  <b-card class="job-card">
    <img class="job-company" :src="job.image" :alt="job.company" />
    <div>
      <h4 class="font-weight-bold">{{ job.title }}</h4>
      <div class="job-content">
        <span>{{ job.company }}</span>
        <span>{{ job.address }}</span>
      </div>
    </div>
  </b-card>
</template>

<script>
export default {
  name: 'JobItem',
  props: ['job'],
};
</script>

<style lang="scss" scoped>
.job {
  &-card {
    @media screen and (max-width: 800px) {
      & > .card-body {
        display: flex;
        align-items: center;

        img {
          margin-right: 2rem;
          margin-bottom: 0;
        }

        h4 {
          font-size: 1.25rem;
        }
      }
    }
  }

  &-company {
    height: 4.5rem;
    width: 4.5rem;
    object-fit: cover;
    margin-bottom: 1rem;
  }

  &-content {
    display: flex;
    flex-direction: column;
    color: var(--gray);
  }
}
</style>
