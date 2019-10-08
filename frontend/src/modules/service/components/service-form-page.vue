<template>
  <div>
    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.service.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.service.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>

      <app-service-form
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
import ServiceForm from '@/modules/service/components/service-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-service-form-page',

  props: ['id'],

  components: {
    [ServiceForm.name]: ServiceForm,
  },

  computed: {
    ...mapGetters({
      record: 'service/form/record',
      findLoading: 'service/form/findLoading',
      saveLoading: 'service/form/saveLoading',
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
      doFind: 'service/form/doFind',
      doNew: 'service/form/doNew',
      doUpdate: 'service/form/doUpdate',
      doCreate: 'service/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/service');
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
