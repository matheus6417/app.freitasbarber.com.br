<template>
  <div>
    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.service.list.title"></app-i18n>
        <el-button @click="toggleFilters" class="button--search">
          <svg
            class="feather feather-search"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
        </el-button>
      </h1>

      <app-service-list-filter></app-service-list-filter>
      <app-service-list-table></app-service-list-table>
      <app-service-list-toolbar></app-service-list-toolbar>
    </div>
  </div>
</template>

<script>
import ServiceListFilter from '@/modules/service/components/service-list-filter.vue';
import ServiceListTable from '@/modules/service/components/service-list-table.vue';
import ServiceListToolbar from '@/modules/service/components/service-list-toolbar.vue';

export default {
  name: 'app-service-list-page',

  components: {
    [ServiceListFilter.name]: ServiceListFilter,
    [ServiceListTable.name]: ServiceListTable,
    [ServiceListToolbar.name]: ServiceListToolbar,
  },
  methods: {
    toggleFilters() {
      this.$root.$emit('toggleFilters');
    },
  },
};
</script>

<style>
</style>
