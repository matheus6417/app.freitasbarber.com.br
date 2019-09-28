import { ServiceModel } from '@/modules/service/service-model';

const { fields } = ServiceModel;

export default [
  fields.id,
  fields.name,
  fields.unitPrice,
  fields.description,
  fields.createdAt
];
