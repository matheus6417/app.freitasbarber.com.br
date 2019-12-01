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
      <!-- <el-form-item :label="fields.id.label" :prop="fields.id.name" v-if="isEditing">
        <el-col :lg="11" :md="16" :sm="24">
          <el-input :disabled="true" v-model="model[fields.id.name]" />
        </el-col>
      </el-form-item>-->
      <el-form-item
        :label="fields.customer.label"
        :prop="fields.customer.name"
        :required="fields.customer.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <app-customer-autocomplete-input
            :fetchFn="fields.customer.fetchFn"
            :mapperFn="fields.customer.mapperFn"
            :showCreate="!modal"
            mode="multiple"
            v-model="model[fields.customer.name]"
          ></app-customer-autocomplete-input>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.products.label"
        :prop="fields.products.name"
        :required="fields.products.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <app-product-autocomplete-input
            :fetchFn="fields.products.fetchFn"
            :mapperFn="fields.products.mapperFn"
            :showCreate="!modal"
            mode="multiple"
            v-model="model[fields.products.name]"
          ></app-product-autocomplete-input>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.services.label"
        :prop="fields.services.name"
        :required="fields.services.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <app-service-autocomplete-input
            :fetchFn="fields.services.fetchFn"
            :mapperFn="fields.services.mapperFn"
            :showCreate="!modal"
            mode="multiple"
            v-model="model[fields.services.name]"
          ></app-service-autocomplete-input>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.date.label"
        :prop="fields.date.name"
        :required="fields.date.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-date-picker
            :placeholder="fields.date.label"
            type="datetime"
            v-model="model[fields.date.name]"
          ></el-date-picker>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.photos.label"
        :prop="fields.photos.name"
        :required="fields.photos.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <app-image-upload
            :max="fields.photos.max"
            :path="fields.photos.path"
            :schema="fields.photos.fileSchema"
            v-model="model[fields.photos.name]"
          ></app-image-upload>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.description.name"
        :prop="fields.description.name"
        :required="fields.description.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input
            :placeholder="fields.description.label"
            :rows="4"
            type="textarea"
            v-model="model[fields.description.name]"
          />
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.valueAlt.label"
        :prop="fields.valueAlt.name"
        :required="fields.valueAlt.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input-number
            :precision="fields.valueAlt.scale"
            :step="0.05"
            v-model="model[fields.valueAlt.name]"
          ></el-input-number>
        </el-col>
      </el-form-item>

      <el-form-item :label="fields.total.label" :prop="fields.total.name" disabled>
        <el-input class="bg-transparent" disabled v-model="model[fields.total.name]" />
      </el-form-item>
      <br />products
      <br />
      {{model.products}}
      <br />
      <br />services
      <br />
      {{model.services}}
      <br />
      <br />customer
      <br />
      {{model.customer}}
      <br />
      <br />total
      <br />
      {{model.total}}
      <!-- <el-form-item
        :label="fields.attachments.label"
        :prop="fields.attachments.name"
        :required="fields.attachments.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <app-file-upload
            :max="fields.attachments.max"
            :path="fields.attachments.path"
            :schema="fields.attachments.fileSchema"
            v-model="model[fields.attachments.name]"
          ></app-file-upload>
        </el-col>
      </el-form-item>-->
      <!-- <el-form-item
        :label="fields.employee.label"
        :prop="fields.employee.name"
        :required="fields.employee.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <app-iam-user-autocomplete-input
            :fetchFn="fields.employee.fetchFn"
            :mapperFn="fields.employee.mapperFn"
            :showCreate="!modal"
            mode="single"
            v-model="model[fields.employee.name]"
          ></app-iam-user-autocomplete-input>
        </el-col>
      </el-form-item>-->

      <!-- <el-form-item
        :label="fields.delivered.label"
        :prop="fields.delivered.name"
        :required="fields.delivered.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-switch v-model="model[fields.delivered.name]"></el-switch>
        </el-col>
      </el-form-item>-->

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
import { OrderModel } from '@/modules/order/order-model';

const { fields } = OrderModel;
const formSchema = new FormSchema([
  fields.id,
  fields.customer,
  fields.products,
  fields.employee,
  fields.delivered,
  fields.attachments,
  fields.services,
  fields.date,
  fields.photos,
  fields.description,
  fields.total,
  fields.valueAlt,
  fields.e1,
  fields.e2,
  fields.e3,
  fields.e4,
  fields.e5,
  fields.e6,
  fields.e7,
  fields.e8,
  fields.e9,
]);

export default {
  name: 'app-order-form',

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
    console.log(this.total);
  },
  watch: {
    model: {
      handler() {
        this.doUpdateTotal();
      },
      deep: true,
      immediate: true,
    },
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

    doUpdateTotal() {
      let sum = 0;
      let prds = this.model.products;
      let svcs = this.model.services;
      for (var i = 0; i < prds.length; i++) {
        if (prds[i]['unitPrice']) {
          sum = sum + prds[i]['unitPrice'];
        }
      }

      for (var i = 0; i < svcs.length; i++) {
        console.log(svcs[i]);
        if (svcs[i]['unitPrice']) {
          sum = sum + svcs[i]['unitPrice'];
        }
      }

      sum =
        sum +
        (this.model.valueAlt ? this.model.valueAlt : 0);
      this.model.total = sum ? sum : 0.0;
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
