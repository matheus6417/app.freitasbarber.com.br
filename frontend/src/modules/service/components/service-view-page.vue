<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/service' }">
        <app-i18n code="entities.service.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.service.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.service.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-service-view-toolbar v-if="record"></app-service-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-text :label="fields.name.label" :value="presenter(record, 'name')"></app-view-item-text>

        <app-view-item-text :label="fields.unitPrice.label" :value="presenter(record, 'unitPrice')"></app-view-item-text>

        <app-view-item-text :label="fields.description.label" :value="presenter(record, 'description')"></app-view-item-text>

        <app-view-item-text :label="fields.e1.label" :value="presenter(record, 'e1')"></app-view-item-text>

        <app-view-item-text :label="fields.e2.label" :value="presenter(record, 'e2')"></app-view-item-text>

        <app-view-item-text :label="fields.e3.label" :value="presenter(record, 'e3')"></app-view-item-text>

        <app-view-item-text :label="fields.e4.label" :value="presenter(record, 'e4')"></app-view-item-text>

        <app-view-item-text :label="fields.e5.label" :value="presenter(record, 'e5')"></app-view-item-text>

        <app-view-item-text :label="fields.e6.label" :value="presenter(record, 'e6')"></app-view-item-text>

        <app-view-item-text :label="fields.isActive.label" :value="presenter(record, 'isActive')"></app-view-item-text>

        <app-view-item-text :label="fields.e7.label" :value="presenter(record, 'e7')"></app-view-item-text>

        <app-view-item-file :label="fields.e8.label" :value="presenter(record, 'e8')"></app-view-item-file>

        <app-view-item-image :label="fields.e9.label" :value="presenter(record, 'e9')"></app-view-item-image>

        <app-view-item-image :label="fields.image.label" :value="presenter(record, 'image')"></app-view-item-image>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ServiceViewToolbar from '@/modules/service/components/service-view-toolbar.vue';
import { ServiceModel } from '@/modules/service/service-model';

const { fields } = ServiceModel;

export default {
  name: 'app-service-view-page',

  props: ['id'],

  components: {
    [ServiceViewToolbar.name]: ServiceViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'service/view/record',
      loading: 'service/view/loading',
    }),

    fields() {
      return fields;
    },
  },

  async created() {
    await this.doFind(this.id);
  },

  methods: {
    ...mapActions({
      doFind: 'service/view/doFind',
    }),

    presenter(record, fieldName) {
      return ServiceModel.presenter(record, fieldName);
    },
  },
};
</script>
