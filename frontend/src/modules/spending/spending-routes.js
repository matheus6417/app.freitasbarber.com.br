import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const SpendingListPage = () =>
  import('@/modules/spending/components/spending-list-page.vue');
const SpendingFormPage = () =>
  import('@/modules/spending/components/spending-form-page.vue');
const SpendingViewPage = () =>
  import('@/modules/spending/components/spending-view-page.vue');
const SpendingImporterPage = () =>
  import('@/modules/spending/components/spending-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'spending',
        path: '/spending',
        component: SpendingListPage,
        meta: {
          auth: true,
          permission: Permissions.values.spendingView,
        },
      },
      {
        name: 'spendingNew',
        path: '/spending/new',
        component: SpendingFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.spendingCreate,
        },
      },
      {
        name: 'spendingImporter',
        path: '/spending/import',
        component: SpendingImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.spendingImport,
        },
      },
      {
        name: 'spendingEdit',
        path: '/spending/:id/edit',
        component: SpendingFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.spendingEdit,
        },
        props: true,
      },
      {
        name: 'spendingView',
        path: '/spending/:id',
        component: SpendingViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.spendingView,
        },
        props: true,
      },
    ],
  },
];
