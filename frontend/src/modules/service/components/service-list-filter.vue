<template>
  <el-popover placement="bottom"  trigger="manual" v-model="visible">
    <el-form
      :label-position="labelPosition"
      :label-width="labelWidthFilter"
      :model="model"
      :rules="rules"
      @submit.native.prevent="doFilter"
      class="filter"
      ref="form"
    >
      <el-row>
        <el-col :lg="12" :md="16" :sm="24">
          <el-form-item :label="fields.name.label" :prop="fields.name.name">
            <el-input v-model="model[fields.name.name]" />
          </el-form-item>
        </el-col>

        <el-col :lg="12" :md="16" :sm="24">
          <el-form-item :label="fields.unitPriceRange.label" :prop="fields.unitPriceRange.name">
            <app-number-range-input v-model="model[fields.unitPriceRange.name]" />
          </el-form-item>
        </el-col>

        <el-col :lg="12" :md="16" :sm="24">
          <el-form-item :label="fields.description.label" :prop="fields.description.name">
            <el-input v-model="model[fields.description.name]" />
          </el-form-item>
        </el-col>
      </el-row>

      <div class="filter-buttons">
        <el-button :disabled="loading" @click="doFilter" icon="el-icon-fa-search" type="primary">
          <app-i18n code="common.search"></app-i18n>
        </el-button>

        <el-button :disabled="loading" @click="doResetFilter" icon="el-icon-fa-undo">
          <app-i18n code="common.reset"></app-i18n>
        </el-button>
      </div>
    </el-form>
  </el-popover>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { FilterSchema } from '@/shared/form/filter-schema';
import { ServiceModel } from '@/modules/service/service-model';

const { fields } = ServiceModel;

const filterSchema = new FilterSchema([
  fields.name,
  fields.unitPriceRange,
  fields.description,
]);

export default {
  name: 'app-service-list-filter',

  data() {
    return {
      visible: false,
      rules: filterSchema.rules(),
      model: {},
    };
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthFilter: 'layout/labelWidthFilter',
      loading: 'service/list/loading',
      filter: 'service/list/filter',
    }),

    fields() {
      return fields;
    },
  },

  async mounted() {
    this.$root.$on('toggleFilters', () => {
      this.visible = !this.visible;
    });
    this.model = filterSchema.initialValues(
      this.filter,
      this.$route.query,
    );

    return this.doFilter();
  },

  methods: {
    ...mapActions({
      doReset: 'service/list/doReset',
      doFetch: 'service/list/doFetch',
    }),

    async doResetFilter() {
      this.model = filterSchema.initialValues();
      this.$refs.form.clearValidate();
      return this.doReset();
    },

     async doFilter() {
      this.$root.$emit('toggleFilters');
      try {
        await this.$refs.form.validate();
        this.$refs.form.clearValidate();
      } catch (error) {
        return;
      }

      const filter = filterSchema.cast(this.model);
      return this.doFetch({
        filter,
      });
    },
  },
};
</script>

<style>
</style>
