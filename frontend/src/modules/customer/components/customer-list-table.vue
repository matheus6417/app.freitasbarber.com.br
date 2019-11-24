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
      row-class-name="listy services-grid-container "
      row-key="id"
      v-loading="loading"
    >
      <!-- <el-table-column type="selection" width="55"></el-table-column> -->

      <el-table-column :label="fields.name.label" :prop="fields.name.name" sortable="custom">
        <template slot-scope="scope">
          <span class="name">{{ presenter(scope.row, 'name') }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="fields.adress.label" :prop="fields.adress.name" sortable="custom">
        <template slot-scope="scope">
          <span>{{ presenter(scope.row, 'adress') }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="call" sortable="custom">
        <template slot-scope="scope">
          <span v-if="scope.row.phone2">
            <a :href="'tel:+55' + scope.row.phone2" @click.stop target="_blank">
              <svg
                class="feather feather-phone-outgoing"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="23 7 23 1 17 1" />
                <line x1="16" x2="23" y1="8" y2="1" />
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                />
              </svg>
            </a>
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="whats" sortable="custom">
        <template slot-scope="scope">
          <span v-if="scope.row.phone1">
            <a :href="'https://wa.me/55' + scope.row.phone1 + '?text='" @click.stop target="_blank">
              <svg
                class="feather feather-message-circle"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                />
              </svg>
            </a>
          </span>
        </template>
      </el-table-column>

      <!-- <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/customer/${scope.row.id}`">
              <el-button type="text">
                <app-i18n code="common.view"></app-i18n>
              </el-button>
            </router-link>

            <router-link :to="`/customer/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
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
import { CustomerModel } from '@/modules/customer/customer-model';
import { mapGetters, mapActions } from 'vuex';
import { CustomerPermissions } from '@/modules/customer/customer-permissions';
import { i18n } from '@/i18n';

const { fields } = CustomerModel;

export default {
  name: 'app-customer-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'customer/list/rows',
      count: 'customer/list/count',
      loading: 'customer/list/loading',
      pagination: 'customer/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'customer/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new CustomerPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new CustomerPermissions(this.currentUser)
        .destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    doRowClick(row, column, event) {
      this.$router.push('/customer/' + row.id);
    },
    cellClass({ row, column, rowIndex, columnIndex }) {
      return column.property;
    },
    ...mapActions({
      doChangeSort: 'customer/list/doChangeSort',
      doChangePaginationCurrentPage:
        'customer/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'customer/list/doChangePaginationPageSize',
      doMountTable: 'customer/list/doMountTable',
      doDestroy: 'customer/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return CustomerModel.presenter(row, fieldName);
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
.services-grid-container {
  display: grid !important;
  grid-template-columns: 1fr 1fr 40px 50px;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 'name name call whats' 'adress adress call whats';
}

.name {
  grid-area: name;
}

.adress {
  grid-area: adress;
}

.call {
  grid-area: call;
}
.whats {
  grid-area: whats;
}
</style>
