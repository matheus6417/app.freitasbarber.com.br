<template>
  <div>
    <el-table
      :border="false"
      :cell-class-name="cellClass"
      :data="rows"
      :show-header="false"
      @row-click="doRowClick"
      @sort-change="doChangeSort"
      ref="table"
      row-class-name="listy orders-grid-container "
      row-key="id"
      v-loading="loading"
    >
      <!-- <el-table-column type="selection" width="55"></el-table-column> -->

      <el-table-column :label="fields.customer.label" :prop="fields.customer.name">
        <template slot-scope="scope">
          <span class="name">
            <app-list-item-relation-to-many
              :label="fields.customer.label"
              :permission="fields.customer.readPermission"
              :url="fields.customer.viewUrl"
              :value="presenter(scope.row, 'customer')"
            ></app-list-item-relation-to-many>
          </span>
        </template>
      </el-table-column>

      <el-table-column :label="fields.products.label" :prop="fields.products.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-many
            :label="fields.products.label"
            :permission="fields.products.readPermission"
            :url="fields.products.viewUrl"
            :value="presenter(scope.row, 'products')"
          ></app-list-item-relation-to-many>
        </template>
      </el-table-column>

      <el-table-column :label="fields.employee.label" :prop="fields.employee.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.employee.label"
            :permission="fields.employee.readPermission"
            :url="fields.employee.viewUrl"
            :value="presenter(scope.row, 'employee')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <!-- <el-table-column
        :label="fields.attachments.label"
        :prop="fields.attachments.name"
        align="center"
      >
        <template slot-scope="scope">
          <app-list-item-file :value="presenter(scope.row, 'attachments')"></app-list-item-file>
        </template>
      </el-table-column>-->

      <el-table-column :label="fields.services.label" :prop="fields.services.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-many
            :label="fields.services.label"
            :permission="fields.services.readPermission"
            :url="fields.services.viewUrl"
            :value="presenter(scope.row, 'services')"
          ></app-list-item-relation-to-many>
        </template>
      </el-table-column>
      <!-- 
      <el-table-column
        :label="fields.description.label"
        :prop="fields.description.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'description') }}</template>
      </el-table-column>-->

      <el-table-column :label="fields.total.label" :prop="fields.total.name" sortable="custom">
        <template slot-scope="scope">{{ presenter(scope.row, 'total') }}</template>
      </el-table-column>

      <!-- <el-table-column
        :label="fields.valueAlt.label"
        :prop="fields.valueAlt.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'valueAlt') }}</template>
      </el-table-column>-->

      <!-- <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/order/${scope.row.id}`">
              <el-button type="text">
                <app-i18n code="common.view"></app-i18n>
              </el-button>
            </router-link>

            <router-link :to="`/order/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
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
      </el-table-column>-->
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
import { OrderModel } from '@/modules/order/order-model';
import { mapGetters, mapActions } from 'vuex';
import { OrderPermissions } from '@/modules/order/order-permissions';
import { i18n } from '@/i18n';

const { fields } = OrderModel;

export default {
  name: 'app-order-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'order/list/rows',
      count: 'order/list/count',
      loading: 'order/list/loading',
      pagination: 'order/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'order/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new OrderPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new OrderPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    doRowClick(row, column, event) {
      this.$router.push('/order/' + row.id);
    },
    cellClass({ column }) {
      return column.property;
    },
    ...mapActions({
      doChangeSort: 'order/list/doChangeSort',
      doChangePaginationCurrentPage:
        'order/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'order/list/doChangePaginationPageSize',
      doMountTable: 'order/list/doMountTable',
      doDestroy: 'order/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return OrderModel.presenter(row, fieldName);
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

<style scoped>
/deep/ .orders-grid-container {
  display: grid !important;
  grid-template-columns: 1fr 90px;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: 'customer date' 'services total' 'products total';
}

/deep/ .customer {
  grid-area: customer;
}

/deep/ .date {
  grid-area: date;
}

/deep/ .services {
  grid-area: services;
}

/deep/ .products {
  grid-area: products;
}
/deep/ tr.el-table__row.listy {
  height: auto;
}
</style>


