<template>
  <div>
    <h1 class="app-content-title">
      <app-i18n code="entities.product.list.title"></app-i18n>
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

  methods: {
    toggleFilters() {
      this.$root.$emit('toggleFilters');
    },
  },
};
</script>

