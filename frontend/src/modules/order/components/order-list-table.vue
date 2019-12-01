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
          <svg
            class="menu-icon feather feather-package"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            style="
    display: inline;
    width: 2ch;
    fill: none;
    stroke: black;
"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="16.5" x2="7.5" y1="9.4" y2="4.21" />
            <path
              d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
            />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" x2="12" y1="22.08" y2="12" />
          </svg>
          <app-list-item-relation-to-many
            :label="fields.products.label"
            :permission="fields.products.readPermission"
            :url="fields.products.viewUrl"
            :value="presenter(scope.row, 'products')"
          ></app-list-item-relation-to-many>
        </template>
      </el-table-column>

      <!-- <el-table-column :label="fields.employee.label" :prop="fields.employee.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.employee.label"
            :permission="fields.employee.readPermission"
            :url="fields.employee.viewUrl"
            :value="presenter(scope.row, 'employee')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>-->

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
          <svg
            class="menu-icon feather feather-scissors"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            style="
    display: inline;
    width: 2ch;
    fill: none;
    stroke: black;
"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="6" cy="6" r="3" />
            <circle cx="6" cy="18" r="3" />
            <line x1="20" x2="8.12" y1="4" y2="15.88" />
            <line x1="14.47" x2="20" y1="14.48" y2="20" />
            <line x1="8.12" x2="12" y1="8.12" y2="12" />
          </svg>
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
        <template slot-scope="scope">R$ {{ presenter(scope.row, 'total') }}</template>
      </el-table-column>

      <el-table-column :label="fields.date.label" :prop="fields.date.name" sortable="custom">
        <template slot-scope="scope">
          <svg
            class="feather feather-calendar"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            style="
    display: inline;
    width: 2ch;
    fill: none;
    stroke: black;
"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect height="18" rx="2" ry="2" width="18" x="3" y="4" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
          </svg>
          <span style="margin-left:1ch">{{ presenter(scope.row, 'date') }}</span>
        </template>
      </el-table-column>
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
  grid-template-rows: 30px 1fr 1fr;
  grid-template-areas: 'customer date' 'services total' 'products total';
}

/deep/ .customer {
  grid-area: customer;
  max-width: calc(100% - 7ch);
}

/deep/ .date {
  grid-area: date;
  transform: translateX(-7ch);
  width: calc(100% + 8ch);
}

/deep/ .services {
  grid-area: services;
}
/deep/ .services strong {
  font-weight: 500;
}

/deep/ .products {
  grid-area: products;
}
/deep/ .products strong {
  font-weight: 500;
}
/deep/ .total {
  grid-area: total;
  font-weight: 600;
  font-size: 1.125rem;
}
/deep/ .employee {
  display: none;
}

/deep/ tr.el-table__row.listy {
  height: auto;
}

/deep/ .services > div > div > div,
/deep/ .products > div > div > div {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  max-width: 17ch;
  margin-left: 1ch;
}
/deep/ .services > div > div,
/deep/ .products > div > div {
  max-width: calc(100% - 2ch);
}

/deep/ .services > div > div > div:after,
/deep/ .products > div > div > div:after {
  content: ',';
}

/deep/ .products > div > div > div:last-child:after,
/deep/ .services > div > div > div:last-child:after {
  content: '';
}

/deep/ tr.el-table__row.listy .cell {
  display: flex;
}
/deep/ .el-table td div {
  display: flex;
  align-items: center;
}
</style>


