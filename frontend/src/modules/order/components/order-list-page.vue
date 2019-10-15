<template>
  <div>
    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.order.list.title"></app-i18n>
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

      <app-order-list-filter></app-order-list-filter>
      <app-order-list-table></app-order-list-table>
      <app-order-list-toolbar></app-order-list-toolbar>
    </div>
  </div>
</template>

<script>
import OrderListFilter from '@/modules/order/components/order-list-filter.vue';
import OrderListTable from '@/modules/order/components/order-list-table.vue';
import OrderListToolbar from '@/modules/order/components/order-list-toolbar.vue';

export default {
  name: 'app-order-list-page',

  components: {
    [OrderListFilter.name]: OrderListFilter,
    [OrderListTable.name]: OrderListTable,
    [OrderListToolbar.name]: OrderListToolbar,
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
