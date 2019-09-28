<template>
  <div>
    <el-table
      :border="true"
      :data="rows"
      @sort-change="doChangeSort"
      ref="table"
      row-key="id"
      v-loading="loading"
    >
      <el-table-column type="selection" width="55"></el-table-column>

      <el-table-column
        :label="fields.name.label"
        :prop="fields.name.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'name') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.date.label"
        :prop="fields.date.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'date') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.value.label"
        :prop="fields.value.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'value') }}</template>
      </el-table-column>

      <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/spending/${scope.row.id}`">
              <el-button type="text">
                <app-i18n code="common.view"></app-i18n>
              </el-button>
            </router-link>

            <router-link :to="`/spending/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
              <el-button type="text">
                <app-i18n code="common.edit"></app-i18n>
              </el-button>
            </router-link>

            <el-button
              :disabled="destroyLoading"
              @click="doDestroyWithConfirm(scope.row.id)"
              type="text"
              v-if="hasPermissionToDestroy"
            >
              <app-i18n code="common.destroy"></app-i18n>
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <div class="el-pagination-wrapper">
      <el-pagination
        :current-page="pagination.currentPage || 1"
        :disabled="loading"
        :layout="paginationLayout"
        :total="count"
        @current-change="doChangePaginationCurrentPage"
        @size-change="doChangePaginationPageSize"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { SpendingModel } from '@/modules/spending/spending-model';
import { mapGetters, mapActions } from 'vuex';
import { SpendingPermissions } from '@/modules/spending/spending-permissions';
import { i18n } from '@/i18n';

const { fields } = SpendingModel;

export default {
  name: 'app-spending-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'spending/list/rows',
      count: 'spending/list/count',
      loading: 'spending/list/loading',
      pagination: 'spending/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'spending/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new SpendingPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new SpendingPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'spending/list/doChangeSort',
      doChangePaginationCurrentPage:
        'spending/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'spending/list/doChangePaginationPageSize',
      doMountTable: 'spending/list/doMountTable',
      doDestroy: 'spending/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return SpendingModel.presenter(row, fieldName);
    },

    async doDestroyWithConfirm(id) {
      try {
        await this.$confirm(
          i18n('common.areYouSure'),
          i18n('common.confirm'),
          {
            confirmButtonText: i18n('common.yes'),
            cancelButtonText: i18n('common.no'),
            type: 'warning',
          },
        );

        return this.doDestroy(id);
      } catch (error) {
        // no
      }
    },
  },
};
</script>

<style>
</style>
