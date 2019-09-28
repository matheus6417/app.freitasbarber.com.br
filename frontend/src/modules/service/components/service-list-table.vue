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
        :label="fields.unitPrice.label"
        :prop="fields.unitPrice.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'unitPrice') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.description.label"
        :prop="fields.description.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'description') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.image.label"
        :prop="fields.image.name"
        align="center"
      >
        <template slot-scope="scope">
          <app-list-item-image :value="presenter(scope.row, 'image')"></app-list-item-image>
        </template>
      </el-table-column>

      <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/service/${scope.row.id}`">
              <el-button type="text">
                <app-i18n code="common.view"></app-i18n>
              </el-button>
            </router-link>

            <router-link :to="`/service/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
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
import { ServiceModel } from '@/modules/service/service-model';
import { mapGetters, mapActions } from 'vuex';
import { ServicePermissions } from '@/modules/service/service-permissions';
import { i18n } from '@/i18n';

const { fields } = ServiceModel;

export default {
  name: 'app-service-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'service/list/rows',
      count: 'service/list/count',
      loading: 'service/list/loading',
      pagination: 'service/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'service/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new ServicePermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new ServicePermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'service/list/doChangeSort',
      doChangePaginationCurrentPage:
        'service/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'service/list/doChangePaginationPageSize',
      doMountTable: 'service/list/doMountTable',
      doDestroy: 'service/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return ServiceModel.presenter(row, fieldName);
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
