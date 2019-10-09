<template>
  <!-- <el-aside :width="asideWidth">
    <h1 class="logo">
      <router-link to="/">
        <app-i18n class="menu-title" code="app.title"></app-i18n>
      </router-link>
  </h1>-->
  <aside class="bottom-0 fixed h-16 w-full z-50 sm:left-0 sm:h-full sm:w-24">
    <!-- :class="{
  'el-menu-side-nav': true,
  collapsed: collapsed,
  }"
  :collapse="collapsed"
    :collapse-transition="false"-->
    <el-menu
      :router="true"
      @select="collapseMenuIfMobile()"
      class="flex sm:flex-col w-full justify-between align-middle sm:flex-col-reverse sm:pt-24 h-full sm:justify-end"
    >
      <!-- <el-menu-item
        :class="classFor('/iam')"
        :route="{ path: '/iam' }"
        index="/iam"
        v-if="hasPermissionToIam"
      >
        <i class="el-icon-fa-user-plus"></i>
        <span slot="title">
          <app-i18n class="menu-title" code="iam.menu"></app-i18n>
        </span>
      </el-menu-item>-->
      <el-menu-item
        :class="classFor('/spending')"
        :route="{ path: '/spending' }"
        index="/spending"
        v-if="hasPermissionToSpending"
      >
        <template slot="title">
          <svg
            class="menu-icon feather feather-dollar-sign"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="12" x2="12" y1="1" y2="23" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
          <app-i18n class="menu-title" code="entities.spending.menu"></app-i18n>
        </template>
      </el-menu-item>
      <el-menu-item
        :class="classFor('/product')"
        :route="{ path: '/product' }"
        index="/product"
        v-if="hasPermissionToProduct"
      >
        <template slot="title">
          <svg
            class="menu-icon feather feather-package"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
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
          <app-i18n class="menu-title" code="entities.product.menu"></app-i18n>
        </template>
      </el-menu-item>
      <el-menu-item
        :class="classFor('/service')"
        :route="{ path: '/service' }"
        index="/service"
        v-if="hasPermissionToService"
      >
        <template slot="title">
          <svg
            class="menu-icon feather feather-scissors"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
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
          <app-i18n class="menu-title" code="entities.service.menu"></app-i18n>
        </template>
      </el-menu-item>
      <el-menu-item
        :class="classFor('/customer')"
        :route="{ path: '/customer' }"
        index="/customer"
        v-if="hasPermissionToCustomer"
      >
        <template slot="title">
          <svg
            class="menu-icon feather feather-users"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <app-i18n class="menu-title" code="entities.customer.menu"></app-i18n>
        </template>
      </el-menu-item>

      <!-- <el-menu-item
        :route="{ path: '/order/new' }"
        class="sm:order-last bg-transparent hover:bg-transparent"
        index="/order/new"
        style="background-color:transparent!important;width:48px"
        v-if="hasPermissionToOrder"
      >
        <template class="menu-fab text-white" slot="title">
          <span
            class="p-3 shadow-md rounded-full mb-5 block relative theme-primary-200 theme-on-primary"
            style="background-color: #faad14;"
          >
            <svg
              class="menu-icon text-white feather feather-plus"
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
              <line x1="12" x2="12" y1="5" y2="19" />
              <line x1="5" x2="19" y1="12" y2="12" />
            </svg>
          </span>
        </template>
      </el-menu-item>-->
      <el-menu-item
        :class="classFor('/order')"
        :route="{ path: '/order' }"
        index="/order"
        v-if="hasPermissionToOrder"
      >
        <template slot="title">
          <svg
            class="menu-icon feather feather-calendar"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect height="18" rx="2" ry="2" width="18" x="3" y="4" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
          </svg>
          <app-i18n class="menu-title" code="entities.order.menu"></app-i18n>
        </template>
      </el-menu-item>

      <el-menu-item :class="classFor('/', true)" :route="{ path: '/' }" index="/">
        <template slot="title">
          <svg
            class="menu-icon feather feather-activity"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
          <app-i18n class="menu-title" code="home.menu"></app-i18n>
        </template>
      </el-menu-item>
    </el-menu>
  </aside>
  <!-- </el-aside> -->
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import { SettingsPermissions } from '@/modules/settings/settings-permissions';
import { AuditLogPermissions } from '@/modules/audit-log/audit-log-permissions';
import { IamPermissions } from '@/modules/iam/iam-permissions';
import { CustomerPermissions } from '@/modules/customer/customer-permissions';
import { ProductPermissions } from '@/modules/product/product-permissions';
import { OrderPermissions } from '@/modules/order/order-permissions';
import { ServicePermissions } from '@/modules/service/service-permissions';
import { SpendingPermissions } from '@/modules/spending/spending-permissions';

export default {
  name: 'app-menu',

  computed: {
    ...mapGetters({
      collapsed: 'layout/menuCollapsed',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
    }),

    hasPermissionToSettings() {
      return new SettingsPermissions(this.currentUser).edit;
    },

    hasPermissionToAuditLog() {
      return new AuditLogPermissions(this.currentUser).read;
    },

    hasPermissionToIam() {
      return new IamPermissions(this.currentUser).read;
    },

    hasPermissionToCustomer() {
      return new CustomerPermissions(this.currentUser).read;
    },
    hasPermissionToProduct() {
      return new ProductPermissions(this.currentUser).read;
    },
    hasPermissionToOrder() {
      return new OrderPermissions(this.currentUser).read;
    },
    hasPermissionToService() {
      return new ServicePermissions(this.currentUser).read;
    },
    hasPermissionToSpending() {
      return new SpendingPermissions(this.currentUser).read;
    },

    asideWidth() {
      if (!this.collapsed) {
        return '200px';
      }

      return '0px';
    },
  },

  methods: {
    ...mapActions({
      collapseMenu: 'layout/collapseMenu',
    }),

    collapseMenuIfMobile() {
      if (this.isMobile) {
        this.collapseMenu();
      }
    },

    classFor(path, exact = false) {
      if (exact) {
        return {
          active: this.$route.path === path,
        };
      }

      return {
        active: this.$route.path.startsWith(path),
      };
    },
  },
};
</script>
