<template>
  <div>
    <h1 class="app-content-title">
      <app-i18n code="entities.product.list.title"></app-i18n>
    </h1>
    <div class="app-content-page">
      <app-product-list-filter></app-product-list-filter>
      <app-product-list-table></app-product-list-table>
      <app-product-list-toolbar></app-product-list-toolbar>
    </div>
  </div>
</template>

<script>
import ProductListFilter from '@/modules/product/components/product-list-filter.vue';
import ProductListTable from '@/modules/product/components/product-list-table.vue';
import ProductListToolbar from '@/modules/product/components/product-list-toolbar.vue';

export default {
  name: 'app-product-list-page',

  components: {
    [ProductListFilter.name]: ProductListFilter,
    [ProductListTable.name]: ProductListTable,
    [ProductListToolbar.name]: ProductListToolbar,
  },
};
</script>

<style>
</style>
