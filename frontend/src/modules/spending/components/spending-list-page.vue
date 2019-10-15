<template>
  <div>
    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.spending.list.title"></app-i18n>
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

      <app-spending-list-filter></app-spending-list-filter>
      <app-spending-list-table></app-spending-list-table>
      <app-spending-list-toolbar></app-spending-list-toolbar>
    </div>
  </div>
</template>

<script>
import SpendingListFilter from '@/modules/spending/components/spending-list-filter.vue';
import SpendingListTable from '@/modules/spending/components/spending-list-table.vue';
import SpendingListToolbar from '@/modules/spending/components/spending-list-toolbar.vue';

export default {
  name: 'app-spending-list-page',

  components: {
    [SpendingListFilter.name]: SpendingListFilter,
    [SpendingListTable.name]: SpendingListTable,
    [SpendingListToolbar.name]: SpendingListToolbar,
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
