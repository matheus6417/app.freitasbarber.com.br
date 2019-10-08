<template>
  <div>
    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.product.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-product-view-toolbar v-if="record"></app-product-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-text :label="fields.name.label" :value="presenter(record, 'name')"></app-view-item-text>

        <app-view-item-text
          :label="fields.description.label"
          :value="presenter(record, 'description')"
        ></app-view-item-text>

        <app-view-item-text :label="fields.unitPrice.label" :value="presenter(record, 'unitPrice')"></app-view-item-text>

        <app-view-item-image :label="fields.photo.label" :value="presenter(record, 'photo')"></app-view-item-image>

        <app-view-item-text :label="fields.costPrice.label" :value="presenter(record, 'costPrice')"></app-view-item-text>

        <app-view-item-text :label="fields.category.label" :value="presenter(record, 'category')"></app-view-item-text>

        <app-view-item-text :label="fields.e1.label" :value="presenter(record, 'e1')"></app-view-item-text>

        <app-view-item-text :label="fields.e2.label" :value="presenter(record, 'e2')"></app-view-item-text>

        <app-view-item-text :label="fields.e3.label" :value="presenter(record, 'e3')"></app-view-item-text>

        <app-view-item-text :label="fields.e4.label" :value="presenter(record, 'e4')"></app-view-item-text>

        <app-view-item-text :label="fields.e5.label" :value="presenter(record, 'e5')"></app-view-item-text>

        <app-view-item-text :label="fields.e6.label" :value="presenter(record, 'e6')"></app-view-item-text>

        <app-view-item-text :label="fields.dateCheck.label" :value="presenter(record, 'dateCheck')"></app-view-item-text>

        <app-view-item-text :label="fields.e7.label" :value="presenter(record, 'e7')"></app-view-item-text>

        <app-view-item-file :label="fields.e8.label" :value="presenter(record, 'e8')"></app-view-item-file>

        <app-view-item-image :label="fields.e9.label" :value="presenter(record, 'e9')"></app-view-item-image>

        <app-view-item-text :label="fields.active.label" :value="presenter(record, 'active')"></app-view-item-text>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ProductViewToolbar from '@/modules/product/components/product-view-toolbar.vue';
import { ProductModel } from '@/modules/product/product-model';

const { fields } = ProductModel;

export default {
  name: 'app-product-view-page',

  props: ['id'],

  components: {
    [ProductViewToolbar.name]: ProductViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'product/view/record',
      loading: 'product/view/loading',
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
      doFind: 'product/view/doFind',
    }),

    presenter(record, fieldName) {
      return ProductModel.presenter(record, fieldName);
    },
  },
};
</script>
