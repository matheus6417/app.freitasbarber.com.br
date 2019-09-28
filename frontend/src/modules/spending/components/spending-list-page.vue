<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.spending.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.spending.list.title"></app-i18n>
      </h1>

      <app-spending-list-toolbar></app-spending-list-toolbar>
      <app-spending-list-filter></app-spending-list-filter>
      <app-spending-list-table></app-spending-list-table>
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
