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
        <app-i18n code="entities.spending.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.spending.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.spending.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.spending.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-spending-form
        :isEditing="isEditing"
        :record="record"
        :saveLoading="saveLoading"
        @cancel="doCancel"
        @submit="doSubmit"
        v-if="!findLoading"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import SpendingForm from '@/modules/spending/components/spending-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-spending-form-page',

  props: ['id'],

  components: {
    [SpendingForm.name]: SpendingForm,
  },

  computed: {
    ...mapGetters({
      record: 'spending/form/record',
      findLoading: 'spending/form/findLoading',
      saveLoading: 'spending/form/saveLoading',
    }),

    isEditing() {
      return !!this.id;
    },
  },

  async created() {
    if (this.isEditing) {
      await this.doFind(this.id);
    } else {
      await this.doNew();
    }
  },

  methods: {
    ...mapActions({
      doFind: 'spending/form/doFind',
      doNew: 'spending/form/doNew',
      doUpdate: 'spending/form/doUpdate',
      doCreate: 'spending/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/spending');
    },

    async doSubmit(payload) {
      if (this.isEditing) {
        return this.doUpdate(payload);
      } else {
        return this.doCreate(payload.values);
      }
    },
  },
};
</script>

<style>
</style>
