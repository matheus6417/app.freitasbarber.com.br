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
            <el-input v-model="model[fields.name.name]" ref="focus" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.birthdate.label"
          :prop="fields.birthdate.name"
          :required="fields.birthdate.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-date-picker placeholder type="date" v-model="model[fields.birthdate.name]"></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.gender.label"
          :prop="fields.gender.name"
          :required="fields.gender.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-radio-group v-model="model[fields.gender.name]">
              <el-radio
                :key="option.id"
                :label="option.id"
                v-for="option of fields.gender.options"
              >{{option.label}}</el-radio>
            </el-radio-group>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.adress.label"
          :prop="fields.adress.name"
          :required="fields.adress.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.adress.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.phone1.label"
          :prop="fields.phone1.name"
          :required="fields.phone1.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.phone1.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.phone2.label"
          :prop="fields.phone2.name"
          :required="fields.phone2.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.phone2.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.relation.label"
          :prop="fields.relation.name"
          :required="fields.relation.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-iam-user-autocomplete-input
              :fetchFn="fields.relation.fetchFn"
              :mapperFn="fields.relation.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.relation.name]"
              mode="single"
            ></app-iam-user-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.relationDescription.label"
          :prop="fields.relationDescription.name"
          :required="fields.relationDescription.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.relationDescription.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.e1.label"
          :prop="fields.e1.name"
          :required="fields.e1.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.e1.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.e2.label"
          :prop="fields.e2.name"
          :required="fields.e2.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="0" :step="1" v-model="model[fields.e2.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.e3.label"
          :prop="fields.e3.name"
          :required="fields.e3.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.e3.scale" :step="0.1" v-model="model[fields.e3.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.e4.label"
          :prop="fields.e4.name"
          :required="fields.e4.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-date-picker placeholder type="date" v-model="model[fields.e4.name]"></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.e5.label"
          :prop="fields.e5.name"
          :required="fields.e5.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-date-picker placeholder type="datetime" v-model="model[fields.e5.name]"></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.e6.label"
          :prop="fields.e6.name"
          :required="fields.e6.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-switch v-model="model[fields.e6.name]"></el-switch>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.active.label"
          :prop="fields.active.name"
          :required="fields.active.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-switch v-model="model[fields.active.name]"></el-switch>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.e7.label"
          :prop="fields.e7.name"
          :required="fields.e7.required"
        >
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

        <el-form-item
          :label="fields.e8.label"
          :prop="fields.e8.name"
          :required="fields.e8.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-file-upload
              :max="fields.e8.max"
              :path="fields.e8.path"
              :schema="fields.e8.fileSchema"
              v-model="model[fields.e8.name]"
            ></app-file-upload>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.e9.label"
          :prop="fields.e9.name"
          :required="fields.e9.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-image-upload
              :max="fields.e9.max"
              :path="fields.e9.path"
              :schema="fields.e9.fileSchema"
              v-model="model[fields.e9.name]"
            ></app-image-upload>
          </el-col>
        </el-form-item>
      <el-form-item>
        <div class="form-buttons">
          <el-button
            :disabled="saveLoading"
            @click="doSubmit"
            icon="el-icon-fa-floppy-o"
            type="primary"
          >
            <app-i18n code="common.save"></app-i18n>
          </el-button>

          <el-button :disabled="saveLoading" @click="doReset" icon="el-icon-fa-undo">
            <app-i18n code="common.reset"></app-i18n>
          </el-button>

          <el-button :disabled="saveLoading" @click="doCancel" icon="el-icon-fa-close">
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
import { CustomerModel } from '@/modules/customer/customer-model';

const { fields } = CustomerModel;
const formSchema = new FormSchema([
  fields.id,
  fields.name,
  fields.birthdate,
  fields.gender,
  fields.adress,
  fields.phone1,
  fields.phone2,
  fields.relation,
  fields.relationDescription,
  fields.e1,
  fields.e2,
  fields.e3,
  fields.e4,
  fields.e5,
  fields.e6,
  fields.active,
  fields.e7,
  fields.e8,
  fields.e9,
]);

export default {
  name: 'app-customer-form',

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
