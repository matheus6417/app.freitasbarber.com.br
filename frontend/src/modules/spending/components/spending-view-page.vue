<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/spending' }">
        <app-i18n code="entities.spending.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.spending.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.spending.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-spending-view-toolbar v-if="record"></app-spending-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-text :label="fields.name.label" :value="presenter(record, 'name')"></app-view-item-text>

        <app-view-item-text :label="fields.date.label" :value="presenter(record, 'date')"></app-view-item-text>

        <app-view-item-text :label="fields.value.label" :value="presenter(record, 'value')"></app-view-item-text>

        <app-view-item-text :label="fields.e1.label" :value="presenter(record, 'e1')"></app-view-item-text>

        <app-view-item-text :label="fields.e2.label" :value="presenter(record, 'e2')"></app-view-item-text>

        <app-view-item-text :label="fields.e3.label" :value="presenter(record, 'e3')"></app-view-item-text>

        <app-view-item-text :label="fields.e4.label" :value="presenter(record, 'e4')"></app-view-item-text>

        <app-view-item-text :label="fields.e5.label" :value="presenter(record, 'e5')"></app-view-item-text>

        <app-view-item-text :label="fields.e6.label" :value="presenter(record, 'e6')"></app-view-item-text>

        <app-view-item-text :label="fields.e7.label" :value="presenter(record, 'e7')"></app-view-item-text>

        <app-view-item-file :label="fields.e8.label" :value="presenter(record, 'e8')"></app-view-item-file>

        <app-view-item-image :label="fields.e9.label" :value="presenter(record, 'e9')"></app-view-item-image>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import SpendingViewToolbar from '@/modules/spending/components/spending-view-toolbar.vue';
import { SpendingModel } from '@/modules/spending/spending-model';

const { fields } = SpendingModel;

export default {
  name: 'app-spending-view-page',

  props: ['id'],

  components: {
    [SpendingViewToolbar.name]: SpendingViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'spending/view/record',
      loading: 'spending/view/loading',
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
      doFind: 'spending/view/doFind',
    }),

    presenter(record, fieldName) {
      return SpendingModel.presenter(record, fieldName);
    },
  },
};
</script>
