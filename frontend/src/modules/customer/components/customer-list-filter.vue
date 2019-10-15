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

        <el-col :lg="12" :md="16" :sm="24" style="margin-bottom: -0.41px;">
          <el-form-item :label="fields.birthdateRange.label" :prop="fields.birthdateRange.name">
            <el-date-picker type="daterange" v-model="model[fields.birthdateRange.name]"></el-date-picker>
          </el-form-item>
        </el-col>

        <el-col :lg="12" :md="16" :sm="24">
          <el-form-item :label="fields.gender.label" :prop="fields.gender.name">
            <el-select placeholder v-model="model[fields.gender.name]">
              <el-option :value="undefined">--</el-option>
              <el-option
                :key="option.id"
                :label="option.label"
                :value="option.id"
                v-for="option in fields.gender.options"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :lg="12" :md="16" :sm="24">
          <el-form-item :label="fields.adress.label" :prop="fields.adress.name">
            <el-input v-model="model[fields.adress.name]" />
          </el-form-item>
        </el-col>

        <el-col :lg="12" :md="16" :sm="24">
          <el-form-item :label="fields.relation.label" :prop="fields.relation.name">
            <app-autocomplete-one-input
              :fetchFn="fields.relation.fetchFn"
              v-model="model[fields.relation.name]"
            ></app-autocomplete-one-input>
          </el-form-item>
        </el-col>

        <el-col :lg="12" :md="16" :sm="24">
          <el-form-item
            :label="fields.relationDescription.label"
            :prop="fields.relationDescription.name"
          >
            <el-input v-model="model[fields.relationDescription.name]" />
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
import { CustomerModel } from '@/modules/customer/customer-model';

const { fields } = CustomerModel;

const filterSchema = new FilterSchema([
  fields.name,
  fields.birthdateRange,
  fields.gender,
  fields.adress,
  fields.relation,
  fields.relationDescription,
]);

export default {
  name: 'app-customer-list-filter',

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
      loading: 'customer/list/loading',
      filter: 'customer/list/filter',
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
      doReset: 'customer/list/doReset',
      doFetch: 'customer/list/doFetch',
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
