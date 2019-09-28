import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import IntegerField from '@/shared/fields/integer-field';
import IntegerRangeField from '@/shared/fields/integer-range-field';
import StringField from '@/shared/fields/string-field';
import EnumeratorField from '@/shared/fields/enumerator-field';
import DecimalRangeField from '@/shared/fields/decimal-range-field';
import DecimalField from '@/shared/fields/decimal-field';
import BooleanField from '@/shared/fields/boolean-field';
import DateField from '@/shared/fields/date-field';
import DateRangeField from '@/shared/fields/date-range-field';
import FilesField from '@/shared/fields/files-field';
import ImagesField from '@/shared/fields/images-field';

function label(name) {
  return i18n(`entities.product.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.product.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  name: new StringField('name', label('name'), {}),
  description: new StringField('description', label('description'), {}),
  unitPrice: new DecimalField('unitPrice', label('unitPrice'), {}),
  photo: new ImagesField('photo', label('photo'), 'product/photo',{}),
  costPrice: new DecimalField('costPrice', label('costPrice'), {}),
  category: new StringField('category', label('category'), {}),
  e1: new StringField('e1', label('e1'), {}),
  e2: new IntegerField('e2', label('e2'), {}),
  e3: new DecimalField('e3', label('e3'), {}),
  e4: new DateField('e4', label('e4'), {}),
  e5: new DateTimeField('e5', label('e5'), {}),
  e6: new BooleanField('e6', label('e6')),
  dateCheck: new DateField('dateCheck', label('dateCheck'), {}),
  e7: new EnumeratorField('e7', label('e7'), [
    { id: 'a', label: enumeratorLabel('e7', 'a') },
    { id: 'b', label: enumeratorLabel('e7', 'b') },
    { id: 'c', label: enumeratorLabel('e7', 'c') },
  ],{}),
  e8: new FilesField('e8', label('e8'), 'product/e8',{}),
  e9: new ImagesField('e9', label('e9'), 'product/e9',{}),
  active: new BooleanField('active', label('active')),
  createdAt: new DateTimeField(
    'createdAt',
    label('createdAt'),
  ),
  updatedAt: new DateTimeField(
    'updatedAt',
    label('updatedAt'),
  ),
  createdAtRange: new DateTimeRangeField(
    'createdAtRange',
    label('createdAtRange'),
  ),
  unitPriceRange: new DecimalRangeField(
    'unitPriceRange',
    label('unitPriceRange'),
  ),
  costPriceRange: new DecimalRangeField(
    'costPriceRange',
    label('costPriceRange'),
  ),
  e2Range: new IntegerRangeField(
    'e2Range',
    label('e2Range'),
  ),
  e3Range: new DecimalRangeField(
    'e3Range',
    label('e3Range'),
  ),
  e4Range: new DateRangeField(
    'e4Range',
    label('e4Range'),
  ),
  e5Range: new DateTimeRangeField(
    'e5Range',
    label('e5Range'),
  ),
  dateCheckRange: new DateRangeField(
    'dateCheckRange',
    label('dateCheckRange'),
  ),
};

export class ProductModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
