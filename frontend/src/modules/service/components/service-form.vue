<template>
  <div>
    <el-form
      :label-position="labelPosition"
      :label-width="labelWidthForm"
      :model="model"
      :rules="rules"
      @submit.native.prevent="doSubmit"
      class="form"
      ref="form"
      v-if="model"
    >
      <el-form-item :label="fields.id.label" :prop="fields.id.name" v-if="isEditing">
        <el-col :lg="11" :md="16" :sm="24">
          <el-input :disabled="true" v-model="model[fields.id.name]" />
        </el-col>
      </el-form-item>
      <el-form-item
        :label="fields.name.label"
        :prop="fields.name.name"
        :required="fields.name.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input ref="focus" v-model="model[fields.name.name]" />
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.unitPrice.label"
        :prop="fields.unitPrice.name"
        :required="fields.unitPrice.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input-number
            :precision="fields.unitPrice.scale"
            :step="0.1"
            v-model="model[fields.unitPrice.name]"
          ></el-input-number>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.description.label"
        :prop="fields.description.name"
        :required="fields.description.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input :rows="4" type="textarea" v-model="model[fields.description.name]" />
        </el-col>
      </el-form-item>

      <el-form-item :label="fields.e1.label" :prop="fields.e1.name" :required="fields.e1.required">
        <el-col :lg="11" :md="16" :sm="24">
          <el-input v-model="model[fields.e1.name]" />
        </el-col>
      </el-form-item>

      <el-form-item :label="fields.e2.label" :prop="fields.e2.name" :required="fields.e2.required">
        <el-col :lg="11" :md="16" :sm="24">
          <el-input-number :precision="0" :step="1" v-model="model[fields.e2.name]"></el-input-number>
        </el-col>
      </el-form-item>

      <el-form-item :label="fields.e3.label" :prop="fields.e3.name" :required="fields.e3.required">
        <el-col :lg="11" :md="16" :sm="24">
          <el-input-number :precision="fields.e3.scale" :step="0.1" v-model="model[fields.e3.name]"></el-input-number>
        </el-col>
      </el-form-item>

      <el-form-item :label="fields.e4.label" :prop="fields.e4.name" :required="fields.e4.required">
        <el-col :lg="11" :md="16" :sm="24">
          <el-date-picker placeholder type="date" v-model="model[fields.e4.name]"></el-date-picker>
        </el-col>
      </el-form-item>

      <el-form-item :label="fields.e5.label" :prop="fields.e5.name" :required="fields.e5.required">
        <el-col :lg="11" :md="16" :sm="24">
          <el-date-picker placeholder type="datetime" v-model="model[fields.e5.name]"></el-date-picker>
        </el-col>
      </el-form-item>

      <el-form-item :label="fields.e6.label" :prop="fields.e6.name" :required="fields.e6.required">
        <el-col :lg="11" :md="16" :sm="24">
          <el-switch v-model="model[fields.e6.name]"></el-switch>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.isActive.label"
        :prop="fields.isActive.name"
        :required="fields.isActive.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-switch v-model="model[fields.isActive.name]"></el-switch>
        </el-col>
      </el-form-item>

      <el-form-item :label="fields.e7.label" :prop="fields.e7.name" :required="fields.e7.required">
        <el-col :lg="11" :md="16" :sm="24">
          <el-select placeholder v-model="model[fields.e7.name]">
            <el-option :value="undefined">--</el-option>
            <el-option
              :key="option.id"
              :label="option.label"
              :value="option.id"
              v-for="option in fields.e7.options"
            ></el-option>
          </el-select>
        </el-col>
      </el-form-item>

      <el-form-item :label="fields.e8.label" :prop="fields.e8.name" :required="fields.e8.required">
        <el-col :lg="11" :md="16" :sm="24">
          <app-file-upload
            :max="fields.e8.max"
            :path="fields.e8.path"
            :schema="fields.e8.fileSchema"
            v-model="model[fields.e8.name]"
          ></app-file-upload>
        </el-col>
      </el-form-item>

      <el-form-item :label="fields.e9.label" :prop="fields.e9.name" :required="fields.e9.required">
        <el-col :lg="11" :md="16" :sm="24">
          <app-image-upload
            :max="fields.e9.max"
            :path="fields.e9.path"
            :schema="fields.e9.fileSchema"
            v-model="model[fields.e9.name]"
          ></app-image-upload>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.image.label"
        :prop="fields.image.name"
        :required="fields.image.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <app-image-upload
            :max="fields.image.max"
            :path="fields.image.path"
            :schema="fields.image.fileSchema"
            v-model="model[fields.image.name]"
          ></app-image-upload>
        </el-col>
      </el-form-item>
      <el-form-item>
        <div class="form-buttons">
          <el-button
            :disabled="saveLoading"
            @click="doSubmit"
            icon="el-icon-fa-floppy-o"
            type="text"
          >
            <app-i18n code="common.save"></app-i18n>
          </el-button>

          <el-button :disabled="saveLoading" @click="doCancel" icon="el-icon-fa-close" type="text">
            <app-i18n code="common.cancel"></app-i18n>
          </el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { FormSchema } from '@/shared/form/form-schema';
import { ServiceModel } from '@/modules/service/service-model';

const { fields } = ServiceModel;
const formSchema = new FormSchema([
  fields.id,
  fields.name,
  fields.unitPrice,
  fields.description,
  fields.e1,
  fields.e2,
  fields.e3,
  fields.e4,
  fields.e5,
  fields.e6,
  fields.isActive,
  fields.e7,
  fields.e8,
  fields.e9,
  fields.image,
]);

export default {
  name: 'app-service-form',

  props: ['isEditing', 'record', 'saveLoading', 'modal'],

  data() {
    return {
      rules: formSchema.rules(),
      model: null,
    };
  },

  created() {
    this.model = formSchema.initialValues(
      this.record || {},
    );
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
    }),

    fields() {
      return fields;
    },
  },

  methods: {
    doReset() {
      this.model = formSchema.initialValues(this.record);
    },

    doCancel() {
      this.$emit('cancel');
    },

    async doSubmit() {
      try {
        await this.$refs.form.validate();
      } catch (error) {
        return;
      }

      const { id, ...values } = formSchema.cast(this.model);

      return this.$emit('submit', {
        id,
        values,
      });
    },
  },
};
</script>

<style>
</style>
