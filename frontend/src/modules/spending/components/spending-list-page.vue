<template>
  <div>
    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.spending.list.title"></app-i18n>
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
};
</script>

<style>
</style>
