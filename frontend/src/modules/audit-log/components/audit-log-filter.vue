<template>
  <el-popover placement="bottom" trigger="manual" v-model="visible">
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
        <el-col :lg="12" :md="16" :sm="24" style="margin-bottom: -0.41px;">
          <el-form-item :label="fields.timestampRange.label" :prop="fields.timestampRange.name">
            <el-date-picker type="datetimerange" v-model="model[fields.timestampRange.name]"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :lg="12" :md="16" :sm="24">
          <el-form-item :label="fields.entityNames.label" :prop="fields.entityNames.name">
            <el-select
              :no-data-text="i18n('auditLog.entityNamesHint')"
              allow-create
              default-first-option
              filterable
              multiple
              placeholder
              v-model="model[fields.entityNames.name]"
            ></el-select>
          </el-form-item>
        </el-col>
        <el-col :lg="12" :md="16" :sm="24">
          <el-form-item :label="fields.createdByEmail.label" :prop="fields.createdByEmail.name">
            <el-input v-model="model[fields.createdByEmail.name]" />
          </el-form-item>
        </el-col>
        <el-col :lg="12" :md="16" :sm="24">
          <el-form-item :label="fields.entityId.label" :prop="fields.entityId.name">
            <el-input v-model="model[fields.entityId.name]" />
          </el-form-item>
        </el-col>
        <el-col :lg="12" :md="16" :sm="24">
          <el-form-item :label="fields.action.label" :prop="fields.action.name">
            <el-input v-model="model[fields.action.name]" />
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
import { AuditLogModel } from '@/modules/audit-log/audit-log-model';
import { i18n } from '@/i18n';

const { fields } = AuditLogModel;

const filterSchema = new FilterSchema([
  fields.timestampRange,
  fields.createdByEmail,
  fields.entityId,
  fields.action,
  fields.entityNames,
]);

export default {
  name: 'app-audit-log-filter',

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
      loading: 'auditLog/loading',
      filter: 'auditLog/filter',
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
      doReset: 'auditLog/doReset',
      doFetch: 'auditLog/doFetch',
    }),

    async doResetFilter() {
      this.model = filterSchema.initialValues();
      this.$refs.form.clearValidate();
      return this.doReset();
    },

    async doFilter() {
      if (this.visible) {
        this.$root.$emit('toggleFilters');
      }
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

    i18n(code) {
      return i18n(code);
    },
  },
};
</script>

<style>
</style>
