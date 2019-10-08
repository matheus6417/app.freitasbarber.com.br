<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.service.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.service.list.title"></app-i18n>
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
};
</script>

<style>
</style>
