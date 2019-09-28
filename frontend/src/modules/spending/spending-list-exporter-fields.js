import { SpendingModel } from '@/modules/spending/spending-model';

const { fields } = SpendingModel;

export default [
  fields.id,
  fields.name,
  fields.date,
  fields.value,
  fields.createdAt
];
