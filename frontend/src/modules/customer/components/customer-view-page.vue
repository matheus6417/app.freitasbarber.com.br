<template>
  <div>
    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.customer.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-customer-view-toolbar v-if="record"></app-customer-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-text :label="fields.name.label" :value="presenter(record, 'name')"></app-view-item-text>

        <app-view-item-text :label="fields.birthdate.label" :value="presenter(record, 'birthdate')"></app-view-item-text>

        <app-view-item-text :label="fields.gender.label" :value="presenter(record, 'gender')"></app-view-item-text>

        <app-view-item-text :label="fields.adress.label" :value="presenter(record, 'adress')"></app-view-item-text>

        <app-view-item-text :label="fields.phone1.label" :value="presenter(record, 'phone1')"></app-view-item-text>

        <app-view-item-text :label="fields.phone2.label" :value="presenter(record, 'phone2')"></app-view-item-text>

        <app-view-item-relation-to-one
          :label="fields.relation.label"
          :permission="fields.relation.readPermission"
          :url="fields.relation.viewUrl"
          :value="presenter(record, 'relation')"
        ></app-view-item-relation-to-one>

        <app-view-item-text
          :label="fields.relationDescription.label"
          :value="presenter(record, 'relationDescription')"
        ></app-view-item-text>

        <app-view-item-text :label="fields.e1.label" :value="presenter(record, 'e1')"></app-view-item-text>

        <app-view-item-text :label="fields.e2.label" :value="presenter(record, 'e2')"></app-view-item-text>

        <app-view-item-text :label="fields.e3.label" :value="presenter(record, 'e3')"></app-view-item-text>

        <app-view-item-text :label="fields.e4.label" :value="presenter(record, 'e4')"></app-view-item-text>

        <app-view-item-text :label="fields.e5.label" :value="presenter(record, 'e5')"></app-view-item-text>

        <app-view-item-text :label="fields.e6.label" :value="presenter(record, 'e6')"></app-view-item-text>

        <app-view-item-text :label="fields.active.label" :value="presenter(record, 'active')"></app-view-item-text>

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
import CustomerViewToolbar from '@/modules/customer/components/customer-view-toolbar.vue';
import { CustomerModel } from '@/modules/customer/customer-model';

const { fields } = CustomerModel;

export default {
  name: 'app-customer-view-page',

  props: ['id'],

  components: {
    [CustomerViewToolbar.name]: CustomerViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'customer/view/record',
      loading: 'customer/view/loading',
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
      doFind: 'customer/view/doFind',
    }),

    presenter(record, fieldName) {
      return CustomerModel.presenter(record, fieldName);
    },
  },
};
</script>
