<template>
  <div>
    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="iam.title"></app-i18n>
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

      <app-iam-list-filter></app-iam-list-filter>
      <app-iam-list-table></app-iam-list-table>
      <app-iam-list-toolbar></app-iam-list-toolbar>
    </div>
  </div>
</template>

<script>
import IamListFilter from '@/modules/iam/components/iam-list-filter.vue';
import IamListTable from '@/modules/iam/components/iam-list-table.vue';
import IamListToolbar from '@/modules/iam/components/iam-list-toolbar.vue';

export default {
  name: 'app-iam-list-page',

  components: {
    [IamListFilter.name]: IamListFilter,
    [IamListTable.name]: IamListTable,
    [IamListToolbar.name]: IamListToolbar,
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
