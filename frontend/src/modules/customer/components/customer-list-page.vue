<template>
  <div>
    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.customer.list.title"></app-i18n>
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

      <app-customer-list-filter></app-customer-list-filter>
      <app-customer-list-table></app-customer-list-table>
      <app-customer-list-toolbar></app-customer-list-toolbar>
    </div>
  </div>
</template>

<script>
import CustomerListFilter from '@/modules/customer/components/customer-list-filter.vue';
import CustomerListTable from '@/modules/customer/components/customer-list-table.vue';
import CustomerListToolbar from '@/modules/customer/components/customer-list-toolbar.vue';

export default {
  name: 'app-customer-list-page',

  components: {
    [CustomerListFilter.name]: CustomerListFilter,
    [CustomerListTable.name]: CustomerListTable,
    [CustomerListToolbar.name]: CustomerListToolbar,
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
