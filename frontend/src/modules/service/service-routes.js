import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const ServiceListPage = () =>
  import('@/modules/service/components/service-list-page.vue');
const ServiceFormPage = () =>
  import('@/modules/service/components/service-form-page.vue');
const ServiceViewPage = () =>
  import('@/modules/service/components/service-view-page.vue');
const ServiceImporterPage = () =>
  import('@/modules/service/components/service-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'service',
        path: '/service',
        component: ServiceListPage,
        meta: {
          auth: true,
          permission: Permissions.values.serviceView,
        },
      },
      {
        name: 'serviceNew',
        path: '/service/new',
        component: ServiceFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.serviceCreate,
        },
      },
      {
        name: 'serviceImporter',
        path: '/service/import',
        component: ServiceImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.serviceImport,
        },
      },
      {
        name: 'serviceEdit',
        path: '/service/:id/edit',
        component: ServiceFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.serviceEdit,
        },
        props: true,
      },
      {
        name: 'serviceView',
        path: '/service/:id',
        component: ServiceViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.serviceView,
        },
        props: true,
      },
    ],
  },
];
