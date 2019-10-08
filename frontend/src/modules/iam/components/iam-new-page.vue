<template>
  <div>
    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="iam.new.title"></app-i18n>
      </h1>

      <app-iam-new-form :saveLoading="saveLoading" @cancel="doCancel" @submit="doSubmit"></app-iam-new-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import IamNewForm from '@/modules/iam/components/iam-new-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-iam-new-page',

  components: {
    [IamNewForm.name]: IamNewForm,
  },

  computed: {
    ...mapGetters({
      saveLoading: 'iam/form/saveLoading',
    }),

    isSingleEmail() {
      return (
        !this.model ||
        !this.model.emails ||
        this.model.emails.length <= 1
      );
    },
  },

  async created() {
    await this.doNew();
  },

  methods: {
    ...mapActions({
      doNew: 'iam/form/doNew',
      doAdd: 'iam/form/doAdd',
    }),

    doCancel() {
      routerAsync().push('/iam');
    },

    async doSubmit(payload) {
      return this.doAdd(payload.values);
    },
  },
};
</script>
