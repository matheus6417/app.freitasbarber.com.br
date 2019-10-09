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
      <el-form-item :prop="fields.name.name" :required="fields.name.required">
        <el-col :lg="11" :md="16" :sm="24">
          <el-input :placeholder="fields.name.label" ref="focus" v-model="model[fields.name.name]" />
        </el-col>
      </el-form-item>
      <div class="flex">
        <el-form-item
          :label="fields.costPrice.label"
          :prop="fields.costPrice.name"
          :required="fields.costPrice.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number
              :precision="fields.costPrice.scale"
              :step="0.1"
              placeholder="0.00"
              v-model="model[fields.costPrice.name]"
            ></el-input-number>
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
              placeholder="0.00"
              v-model="model[fields.unitPrice.name]"
            ></el-input-number>
          </el-col>
        </el-form-item>
      </div>
      <el-form-item :prop="fields.dateCheck.name" :required="fields.dateCheck.required">
        <el-col :lg="11" :md="16" :sm="24">
          <el-date-picker
            :placeholder="fields.dateCheck.label"
            type="date"
            v-model="model[fields.dateCheck.name]"
          ></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item
        :label="fields.photo.label"
        :prop="fields.photo.name"
        :required="fields.photo.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <app-image-upload
            :max="fields.photo.max"
            :path="fields.photo.path"
            :schema="fields.photo.fileSchema"
            v-model="model[fields.photo.name]"
          ></app-image-upload>
        </el-col>
      </el-form-item>
      <!-- 
      <el-form-item :prop="fields.category.name" :required="fields.category.required">
        <el-col :lg="11" :md="16" :sm="24">
          <el-input :placeholder="fields.category.label" v-model="model[fields.category.name]" />
        </el-col>
      </el-form-item>-->

      <el-form-item :prop="fields.description.name" :required="fields.description.required">
        <el-col :lg="11" :md="16" :sm="24">
          <el-input
            :placeholder="fields.description.label"
            :rows="4"
            type="textarea"
            v-model="model[fields.description.name]"
          />
        </el-col>
      </el-form-item>

      <!-- 
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
      </el-form-item>-->

      <!-- <el-form-item :prop="fields.active.name" :required="fields.active.required">
        <el-col :lg="11" :md="16" :sm="24">
          <el-switch :active-text="fields.active.label" v-model="model[fields.active.name]"></el-switch>
        </el-col>
      </el-form-item>-->
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
import { ProductModel } from '@/modules/product/product-model';

const { fields } = ProductModel;
const formSchema = new FormSchema([
  fields.id,
  fields.name,
  fields.description,
  fields.unitPrice,
  fields.photo,
  fields.costPrice,
  fields.category,
  fields.e1,
  fields.e2,
  fields.e3,
  fields.e4,
  fields.e5,
  fields.e6,
  fields.dateCheck,
  fields.e7,
  fields.e8,
  fields.e9,
  fields.active,
]);

export default {
  name: 'app-product-form',

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
